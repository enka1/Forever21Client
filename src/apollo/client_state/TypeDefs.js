import gql from 'graphql-tag'

export default gql `
    type SelectedCategories {
        _id: [String]
    }
    type Mutation{
        updateSelectedCategories(id: [String] = []): SelectedCategories
    }
`