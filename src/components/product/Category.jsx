import React, {Component} from 'react'

export default class ProductCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0
    }
  }

  onClickHandle(id) {
    this.setState({selected: id})
    this
      .props
      .updateSelectedCategories(id)
  }

  generateCategory(categories) {
    return categories.map(category => (
      <p
        key={category._id}
        onClick={() => this.onClickHandle(category._id)}
        className={"font__poppins py-3 " + (this.state.selected === category._id
        ? "category__item--active"
        : "category__item")}>
        {category.name}
      </p>
    ))
  }

  render() {
    const categories = this.props.categories || []
    const selected = this.state.selected
    return (
      <div>
        <p className="font__oswald category__header">Categories</p>
        <div className="divider mb-3"></div>
        <p
          className={"font__poppins py-3 " + (selected === 0
          ? "category__item--active"
          : "category__item")}
          onClick={() => this.onClickHandle(null)}>
          All
        </p>
        {this.generateCategory(categories)}
      </div>
    )
  }
}
