import makeCustomProducts from '../../generate_components/makeCustomProducts'
import NEWEST_PRODUCT_QUERY from '../../graphql/query/products/getNewestProduct'

export default makeCustomProducts(NEWEST_PRODUCT_QUERY)