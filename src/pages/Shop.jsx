import React, { Component } from 'react'

import ProductCategory from '../custom_components/categories/ProductCategories'
import ProductsByCategory from '../custom_components/products/ProductsByCategories'
import Paginate from '../components/Paginate'
import Filter from '../components/product/Filter'
export default class Shop extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row w-100">
          <div className="col-3">
            <ProductCategory />
            <Filter className="mt-5" />
          </div>
          <div className="col-9">
            <ProductsByCategory className="col-4 p-4" />
            <Paginate className="mt-5" />
          </div>
        </div>
      </div>
    )
  }
}
