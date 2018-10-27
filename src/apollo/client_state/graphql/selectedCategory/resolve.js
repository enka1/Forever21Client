import SELECTED_CATEGORY_QUERY from './query'

export const Query = {
    selectedCategory: (_, __, { cache }) => {
        console.log(cache.readQuery({
            query: SELECTED_CATEGORY_QUERY
        }))
        return cache.readQuery({
            query: SELECTED_CATEGORY_QUERY
        })
    }
}

export const Mutation = {
    updateSelectedCategory: (_, args, { cache }) => {
        cache.writeQuery({
            query: SELECTED_CATEGORY_QUERY,
            data: args
        })
        return args
    }
}