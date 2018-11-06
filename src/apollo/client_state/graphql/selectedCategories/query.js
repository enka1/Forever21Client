import gql from 'graphql-tag'

export default gql `
    query selectedCategories {
        selectedCategories @client{
            id
        }
    }
`