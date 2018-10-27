import React, { Component } from 'react'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from "apollo-cache-inmemory";

import Routes from '../routes'
import clientState from './client_state'

export const cache = new InMemoryCache()
const client = new ApolloClient({
    link: ApolloLink.from([clientState, new HttpLink({ uri: '/graphql' })]),
    cache
})

export default class extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Routes />
            </ApolloProvider>
        )
    }
}

