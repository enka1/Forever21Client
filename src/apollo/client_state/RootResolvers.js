import { Mutation as SelectedCategoriesMutation } from './graphql/selectedCategories/resolve'

export default {
    Mutation: {
        ...SelectedCategoriesMutation
    }
}