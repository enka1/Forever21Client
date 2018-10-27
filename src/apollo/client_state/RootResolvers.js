import { Query as SelectedCategoryQuery, Mutation as SelectedCategoryMutation } from './graphql/selectedCategories/resolve'

export default {
    Query: {
        ...SelectedCategoryQuery
    },
    Mutation: {
        ...SelectedCategoryMutation
    }
}