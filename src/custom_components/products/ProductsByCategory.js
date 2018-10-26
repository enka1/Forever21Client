import makeCustomProducts from '../../generate_components/makeCustomProducts'
import PRODUCT_BY_CATEGORY_QUERY from '../../graphql/query/products/getProductsByCategory'

export default makeCustomProducts(PRODUCT_BY_CATEGORY_QUERY, {categories: ["5bd26e9819685a2bd0cef6dc"]})