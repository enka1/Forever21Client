import makeCustomProducts from '../../generate_components/makeCustomProducts'
import BEST_SELLER_PRODUCT_QUERY from '../../graphql/query/products/getBestSellerProduct'

export default makeCustomProducts(BEST_SELLER_PRODUCT_QUERY)