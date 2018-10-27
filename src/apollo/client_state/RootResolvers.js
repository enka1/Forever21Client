import { Query as SelectedCategoriesQuery, Mutation as SelectedCategoriesMutation } from './graphql/selectedCategories/resolve'

export default {
    Query: {
        ...SelectedCategoriesQuery
    },
    Mutation: {
        ...SelectedCategoriesMutation
    }
}