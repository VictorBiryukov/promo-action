import React, { FC } from 'react';
import { ApolloClient, ApolloProvider, HttpLink, NormalizedCacheObject } from '@apollo/client';

import { cache } from '../cache'
import { GiftVendorList } from './GiftVendorList'

const { fetch } = require('cross-fetch')
const signer = require('../signer-sdk/signer.js')

const dataSpaceUrl = "/graphql"

export interface ServiceData {
  appAddress: string
  appKey: string
  appSecret: string
}



export const AppProvider: FC<ServiceData> = ({ appAddress, appKey, appSecret }) => {

  const initClient = () => {
    const authFetch = (uri: any, options: any) => {

      let sig = new signer.Signer()
      sig.Key = appKey
      sig.Secret = appSecret
      let request = new signer.HttpRequest(options.method, appAddress, options.headers, options.body)
      sig.Sign(request)

      return fetch(uri, options);
    };

    localStorage.setItem("appAddress", appAddress)
    localStorage.setItem("appKey", appKey)
    localStorage.setItem("appSecret", appSecret)
    console.log(process.env.NODE_ENV);



    return new ApolloClient({
      cache: cache,
      link: new HttpLink({
        uri: process.env.NODE_ENV === 'production' ? appAddress : 'graphql',
        fetch: authFetch,
      })
    })
  }



  var client: ApolloClient<NormalizedCacheObject> = initClient()

  if (!(appAddress === localStorage.getItem("appAddress") &&
    appKey === localStorage.getItem("appKey") &&
    appSecret === localStorage.getItem("appSecret"))
  ) {
    client = initClient()
  }

  return (
    <ApolloProvider client={client}>
      <GiftVendorList />
    </ApolloProvider>
  )

}