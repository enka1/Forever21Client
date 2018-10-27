import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import Category from '../../components/product/Category'
import CATEGORIES_QUERY from '../../graphql/query/categories/getCategories'
import UPDATE_SELECTED_CATEGORIES_MUTATION from '../../apollo/client_state/graphql/selectedCategory/mutation'

class ProductCategory extends Component {
    updateSelectedCategories(variables) {
        this.props.updateSelectedCategories(variables)
    }
    render() {
        const { error, loading, categories } = this.props.categories
        if (loading) {
            return null
        }
        else if (error) {
            return null
        }
        return <Category categories={categories} />
    }
}

export default compose(
    graphql(
        UPDATE_SELECTED_CATEGORIES_MUTATION,
        { name: 'updateSelectedCategories' }
    ),
    graphql(
        CATEGORIES_QUERY,
        {
            props: ({ data }) => {
                return {
                    categories: data
                }
            }
        }
    )
)(ProductCategory)