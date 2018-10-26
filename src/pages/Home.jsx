import React, { Component } from 'react'

import Feature from '../components/Feature'
import Brand from '../components/Brand'
import NewestProducts from '../custom_components/products/NewestProducts'
import BestSellerProducts from '../custom_components/products/BestSellerProducts'
 
export default class Home extends Component {
  
  render() {
    return (
      <div>
        <div className="container mt-3">
          <Feature className="my-5" />
          <div className="title text-center font__raleway mt-5">New Arrivals</div>
          <p className="text-muted small text-center font__poppins mb-5">The Best Online Sales to Shop This Weekend</p>
          <NewestProducts className="col-3"/>
          <img className="mx-auto d-block mb-5 mt-5" src="//cdn.shopify.com/s/files/1/0044/6929/3126/files/2.jpg?v=1537154681" alt="" />
          <div className="title text-center font__raleway mt-5">Best Sale</div>
          <p className="text-muted small text-center font__poppins mb-5">The Best Online Sales to Shop This Weekend</p>
          <BestSellerProducts className="col-3"/>
        </div>
        <Brand className="mt-5" />
      </div>
    )
  }
}
