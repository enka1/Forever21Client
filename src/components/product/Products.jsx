import React, { Component } from 'react'
import Product from './Product'

export default class ProductCollection extends Component {

    generateProduct(products, className) {
        return products.map(product =>
            <Product
                className={className}
                key={product._id}
                name={product.name}
                price={product.exportPrice}
                img={product.img} />
        )
    }

    render() {
        const products = this.props.products || []
        const className = this.props.className || ''
        return (
            <div className="row">
                {this.generateProduct(products, className)}
            </div>
        )
    }
}