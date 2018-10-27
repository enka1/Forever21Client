import { Query as SelectedCategoryQuery, Mutation as SelectedCategoryMutation } from './graphql/selectedCategory/resolve'

export default {
    Query: {
        ...SelectedCategoryQuery
    },
    Mutation: {
        ...SelectedCategoryMutation
    }
}