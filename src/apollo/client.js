import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'

import cache from './cache'
// import clientState from './client_state'

export default new ApolloClient({
    link: ApolloLink.from(
        [new HttpLink({ uri: '/graphql' })],
        // clientState
    ),
    cache
}) 