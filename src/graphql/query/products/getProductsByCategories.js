import gql from 'graphql-tag'

export default gql `
query ($criteria: ProductInput, $skip: Int, $limit: Int, $sort: [ProductSortCases]) {
  products(criteria: $criteria, sort: $sort, skip: $skip, limit: $limit) {
    _id
    name
    exportPrice
    patterns {
      images
    }
  }
}
`