import React, {Component} from 'react'

function convertToFormatPrice(price) {
  price = price
    .split("")
    .reverse();
  let new_price = price[0]
  for (let i = 1; i < price.length; i++) {
    new_price = i % 3 !== 0
      ? price[i] + new_price
      : price[i] + '.' + new_price
  }
  return new_price
}

export default class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHover: false
    }
  }
  trackHover(isHover) {
    setTimeout(() => {
      this.setState({isHover})
    }, 150)
  }
  render() {
    const {images, name, price, className} = this.props
    let {isHover} = this.state
    return (
      <div
        className={className + " product"}
        onMouseEnter={() => this.trackHover(true)}
        onMouseLeave={() => this.trackHover(false)}>
        <img
          className="w-100 product__img"
          src={isHover
          ? images[3]
          : images[0]}
          alt=""/>
        <p className="font__poppins text-center mb-2 mt-4 product__name">{name}</p>
        <p className="font__poppins text-center product__price font-weight-bold">
          {convertToFormatPrice(price.toString())}
          ₫
        </p>
        <button
          className={"btn product__quick-view font__poppins btn-dark px-4 " + (isHover
          ? "d-block"
          : "d-none")}>Quick View</button>
      </div>
    )
  }
}