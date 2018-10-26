import React, { Component } from 'react'

export default class ProductCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedId: 1
    }
  }

  generateCategory(categories) {
    return categories.map(category => (
      <p key={category.Id} onClick={() => this.catgoryOnClickHandkle(category.Id)}
        className="font__poppins category__item py-3">
        {category.name}
      </p>
    ))
  }

  render() {
    const categories = this.props.categories || []
    return (
      <div>
        <p className="font__oswald category__header">Categories</p>
        <div className="divider mb-3"></div>
        <p
          className="font__poppins category__item py-3">
          All
        </p>
        {this.generateCategory(categories)}
      </div>
    )
  }
}
