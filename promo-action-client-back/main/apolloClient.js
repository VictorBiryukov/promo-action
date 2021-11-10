const {ApolloClient, gql, InMemoryCache, HttpLink} = require('@apollo/client/core');
const signer = require('./signer-sdk/signer.js')
const {fetch} = require('cross-fetch');

const https = require("https");
https.globalAgent.options.rejectUnauthorized = false

let dataspaceUrl = process.env.DATASPACE_URL

const client = (() => {
    // request subscribe
    const customFetch = (uri, options) => {
        let appKey = process.env.APP_KEY
        let appSecret = process.env.APP_SECRET

        if (!appKey || !appSecret) {
            console.log("API_SECRET or API_KEY is undefined. Request will not be signed")
        } else {
            let sig = new signer.Signer()
            sig.Key = appKey
            sig.Secret = appSecret
            let request = new signer.HttpRequest(options.method, uri, options.headers, options.body)
            sig.Sign(request)
        }

        return fetch(uri, options);
    };

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({uri: dataspaceUrl, fetch: customFetch})
    })
})()

const verifyPromoCode = async (code) => {
    const rq = `
            query {
                    searchVoucher(cond:"it.code == '${code}'"){
                        elems{
                            id
                            code
                            statusForVoucherMain {code}
                            gift { entity {id} }
                        }
                    }
                }`;
    await client.cache.reset();
    const rs = await client.query({query: gql`${rq}`});
    console.log(`SearchVoucher response: ${JSON.stringify(rs)}`)
    return rs.data.searchVoucher.elems[0];
}

const checkGiftExist = async (kind) => {
    const rq = `
            query  {
                  searchGift (cond: "root.kind == '${kind}' && !entities{type = Voucher, cond = it.gift.entityId == root.$id}.$exists ", limit: 1) {
                    elems {
                      id
                      kind
    				  vendor{id}
                    }
                  }
                }
            `
    await client.cache.reset();
    const rs = await client.query({query: gql`${rq}`});
    console.log(`CheckGiftExist response: ${JSON.stringify(rs)}`)
    return rs.data.searchGift.elems[0]
}

const issueVoucher = async (giftId, giftRootId, voucherId, code) => {
    const rq = `
                mutation {
    		      packet(idempotencePacketId: "${voucherId}") {
                    updateVoucher(
                      input: {
                        id: ${voucherId}
                        code: "${code}"
                        statusForVoucherMain: { code: "ISSUED" }
                        gift: { entityId: "${giftId}", rootEntityId: "${giftRootId}" }
                      }
                    ) {
                      id
                      gift {
                        entityId
                        entity {
                          serialNumber
                          vendor {
                            name
                          }
                        }
                      }
                      statusForVoucherMain {
                        code
                      }
                    }
                  }
                }
            `
    await client.cache.reset();
    try {
        const addAssignment = await client.mutate({mutation: gql`${rq}`})
        console.log(`UpdateVoucher response: ${JSON.stringify(addAssignment)}`)
        const entity = addAssignment.data.packet.updateVoucher.gift.entity;
        return `You have been given a gift from "${entity.vendor.name}". Serial number: ${entity.serialNumber}`
    } catch (e) {
        console.log(e)
        return "Gift with the current code has already been issued"
    }

}

module.exports = {verifyPromoCode, checkGiftExist, issueVoucher};