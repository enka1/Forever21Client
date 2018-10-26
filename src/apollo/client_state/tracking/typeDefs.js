import gql from 'graphql-tag'

export default gql `
    type Tracking {
        selectedCategory: [String]
    }
    type Query {
        tracking: Tracking
    }
`