import gql from 'graphql-tag'

export default gql`
    mutation updateSelectedCategories($id: [String]) {
        updateSelectedCategories(id: $id) {
            _id
        }
    }
`