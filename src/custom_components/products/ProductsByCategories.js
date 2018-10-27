import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import SELECTED_CATEGORIES_QUERY from '../../apollo/client_state/graphql/selectedCategories/query'
import makeCustomProducts from '../../generate_components/makeCustomProducts'
import PRODUCT_BY_CATEGORIES_QUERY from '../../graphql/query/products/getProductsByCategories'

class CustomProducts extends Component {
    render() {
        const { loading, error, selectedCategories } = this.props.data
        if (loading) {
            return null
        }
        if (error) {
            return null
        }
        const C = makeCustomProducts(PRODUCT_BY_CATEGORIES_QUERY, selectedCategories)
        return <C {...this.props} />
    }
}

export default compose(graphql(SELECTED_CATEGORIES_QUERY))(CustomProducts)