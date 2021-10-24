import React, { FC, MutableRefObject } from 'react';
import { ApolloClient, ApolloProvider, HttpLink, NormalizedCacheObject, useApolloClient } from '@apollo/client';

import { cache } from '../cache'
import { GiftVendorList } from './GiftVendorList'

const { fetch } = require('cross-fetch')
const signer = require('../signer-sdk/signer.js')

const dataSpaceUrl = "/graphql"

export interface ServiceData {
  appAddress: string
  appKey: string
  appSecret: string
  initApolloClient: MutableRefObject<boolean>
}

export const AppProvider: FC<ServiceData> = ({ appAddress, appKey, appSecret, initApolloClient }) => {

  const initClient = () => {
    const authFetch = (uri: any, options: any) => {

      let sig = new signer.Signer()
      sig.Key = appKey
      sig.Secret = appSecret
      let request = new signer.HttpRequest(options.method, appAddress, options.headers, options.body)
      sig.Sign(request)

      return fetch(uri, options);
    };

    console.log(process.env.NODE_ENV);



    return new ApolloClient({
      cache: cache,
      link: new HttpLink({
        uri: process.env.NODE_ENV === 'production' ? appAddress : 'graphql',
        fetch: authFetch,
      })
    })
  }



  var apolloClient: ApolloClient<NormalizedCacheObject> | undefined

  if (initApolloClient.current) {
    apolloClient = initClient()
    initApolloClient.current = false
  }

  if (apolloClient) {
    return (
      <ApolloProvider client={apolloClient!}>
        <GiftVendorList />
      </ApolloProvider>
    )
  } else {
    return <p>Please enter authorization data...</p>
  }

}