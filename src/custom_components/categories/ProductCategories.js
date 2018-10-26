import React, { Component } from 'react'
import { Query } from 'react-apollo'

import Category from '../../components/product/Category'
import CATEGORIES_QUERY from '../../graphql/query/categories/getCategories'

export default class ProductCategory extends Component {
    render() {
        return (
            <Query query={CATEGORIES_QUERY}>
                {({ loading, error, data: { categories } }) => {
                    if (loading) {
                        return null
                    }
                    else if (error) {
                        return null
                    }
                    return <Category categories={categories}/>
                }}
            </Query>
        )
    }
}