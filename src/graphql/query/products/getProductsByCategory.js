import gql from 'graphql-tag'

export default gql`
query ProductsByCategory ($categories: [String]){
  products(where: {categories: $categories}) {
    _id
    name
    exportPrice
		img
  }
}
`