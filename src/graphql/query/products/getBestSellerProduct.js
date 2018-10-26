import gql from 'graphql-tag'

export default gql`
query BestSellerProduct{
  products(limit: 4){
    _id
    name
    exportPrice
    img
  }
}
`