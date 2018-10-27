import SELECTED_CATEGORIES_QUERY from './query'

export const Query = {
    // selectedCategories: (_, __, { cache }) => {
    //     return cache.readQuery({
    //         query: SELECTED_CATEGORIES_QUERY
    //     })
    // }
}

export const Mutation = {
    updateSelectedCategories: (_, { id }, { cache }) => {
        let { selectedCategories } = cache.readQuery({
            query: SELECTED_CATEGORIES_QUERY
        })
        cache.writeQuery({
            query: SELECTED_CATEGORIES_QUERY,
            data: {
                selectedCategories: { ...selectedCategories, _id: id }
            }
        })
        return null
    }
}