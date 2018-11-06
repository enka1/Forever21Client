import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import Category from '../../components/product/Category'
import CATEGORIES_QUERY from '../../graphql/query/categories/getCategories'
import UPDATE_SELECTED_CATEGORIES_MUTATION from '../../apollo/client_state/graphql/selectedCategories/mutation'

class ProductCategory extends Component {
    constructor(props) {
        super(props)
        this.updateSelectedCategories = this.updateSelectedCategories.bind(this)
    }

    updateSelectedCategories(id) {
        this.props.updateSelectedCategories({
            variables: {
                id
            }
        })
    }
    render() {
        const { error, loading, categories } = this.props.categories
        if (loading) {
            return null
        }
        else if (error) {
            return null
        }
        return <Category updateSelectedCategories={this.updateSelectedCategories} categories={categories} />
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
