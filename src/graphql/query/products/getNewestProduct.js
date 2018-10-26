import gql from 'graphql-tag'

export default gql`
query NewestProducts{
  products(sort:importDate_DESC, limit: 4){
    _id
    name
    exportPrice
    img
  }
}
`