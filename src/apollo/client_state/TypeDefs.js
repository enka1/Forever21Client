import gql from 'graphql-tag'

export default gql `
    type SelectedCategories {
        _id: [String]
    }
    type Product {
        _id: String
    }
    type Query {
        product: Product
        selectedCategories: SelectedCategories
    }
    type Mutation{
        updateSelectedCategories(id: [String] = []): SelectedCategory
    }
`