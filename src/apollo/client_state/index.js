import { withClientState } from "apollo-link-state";

import cache from '../cache'

export default withClientState({
    cache,
    defaults,
    resolvers,
    typeDefs
})