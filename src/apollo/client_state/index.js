import { withClientState } from "apollo-link-state";

import cache from '../'
import resolvers from './RootResolvers'
import typeDefs from './TypeDefs'
import defaults from './RootDefault'

export default withClientState({
    cache,
    typeDefs,
    resolvers,
    defaults
})