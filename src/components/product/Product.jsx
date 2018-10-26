import React, { Component } from 'react'

function convertToFormatPrice(price) {
    price = price.split("").reverse();
    let new_price = price[0]
    for (let i = 1; i < price.length; i++) {
        new_price = i % 3 !== 0 ? price[i] + new_price : price[i] + '.' + new_price
    }
    return new_price
}

export default class ProductItem extends Component {
    render() {
        const { img, name, price, className } = this.props
        return (
            <div className={className}>
                <img className="w-100" src={img} alt="" />
                <p className="font__poppins text-center mb-2 mt-4 product__name">{name}</p>
                <p className="font__poppins text-center product__price font-weight-bold">
                    {convertToFormatPrice(price.toString())} ₫
                </p>
            </div>
        )
    }
}