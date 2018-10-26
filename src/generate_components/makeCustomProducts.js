import React, { Component } from 'react'
import { Query } from 'react-apollo'

import Products from '../components/product/Products'

export default (query, variables = null) => {
    return class extends Component {
        render() {
            return (
                <Query query={query} variables={variables}>
                    {({ error, loading, data: { products } }) => {
                        if (error) {
                            return null
                        }
                        if (loading) {
                            return null
                        }
                        return <Products products={products} {...this.props} />
                    }}
                </Query>
            )
        }
    }
}