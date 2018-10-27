import gql from 'graphql-tag'

export default gql `
    type SelectedCategories {
        _id: [String]
    }
    type Query {
        selectedCategories: SelectedCategories
    }
    type Mutation{
        updateSelectedCategories(id: [String] = []): SelectedCategories
    }
`