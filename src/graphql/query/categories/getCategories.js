import gql from 'graphql-tag'

export default gql `
query getCategories {
  categories {
    _id
    name
  }
}
`