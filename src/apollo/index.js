import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'

import client from './client'
import Routes from '../routes'

export default class extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Routes/>
            </ApolloProvider>
        )
    }
}