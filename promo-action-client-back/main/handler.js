'use strict';
const {verifyPromoCode, checkGiftExist, issueVoucher} = require("./apolloClient");

const handler = async (event, context) => {
    if (event.method === 'OPTIONS') {
        return context
            .status(200)
            .headers({
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
                "Access-Control-Allow-Headers": "*"
            })
            .succeed('');
    }

    console.log("Request: " + JSON.stringify(event))
    if (event.query.code === undefined) {
        return context
            .status(200)
            .succeed(`Gift code not set!`)
    }
    if (event.query.kind === undefined) {
        return context
            .status(200)
            .succeed(`Gift type not specified!`)
    }

    const voucher = await verifyPromoCode(event.query.code);
    if (voucher === undefined || voucher.id === undefined) {
        return context
            .status(200)
            .succeed(`Promo code "${event.query.code}" not registered!`)
    } else if (voucher.gift.entity !== null || voucher.statusForVoucherMain.code !== "OPEN") {
        return context
            .status(200)
            .succeed(`Gift for the code "${event.query.code}" has already been issued`)
    }

    const gift = await checkGiftExist(event.query.kind)
    if (gift === undefined || gift.id === undefined) {
        return context
            .status(200)
            .succeed(`No available gifts with type ${event.query.kind}`)
    }

    const assignment = await issueVoucher(gift.id, gift.vendor.id, voucher.id, event.query.code)

    return context
        .status(200)
        .succeed(assignment)
};

module.exports = handler;