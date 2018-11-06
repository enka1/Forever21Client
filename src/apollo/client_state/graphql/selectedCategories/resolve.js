import SELECTED_CATEGORIES_QUERY from './query'

export const Mutation = {
   updateSelectedCategories: (_, { id }, { cache }) => {
      let { selectedCategories } = cache.readQuery({
         query: SELECTED_CATEGORIES_QUERY
      })
      cache.writeQuery({
         query: SELECTED_CATEGORIES_QUERY,
         data: {
            selectedCategories: { ...selectedCategories, id }
         }
      })
      return null
   }
}