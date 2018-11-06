import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import Products from '../components/product/Products'

class CustomProducts extends Component {
    render() {
        console.log(this.props)
        const { error, loading, products } = this.props.data
        if (error) {
            return null
        }
        if (loading) {
            return null
        }
        return <Products products={products} {...this.props} />
    }
}

export default (query, variables) => compose(graphql(query, { options: { variables } }))(CustomProducts)