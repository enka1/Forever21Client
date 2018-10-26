import React, { Component } from 'react'

export default class Paginate extends Component {
  render() {
    return (
      <div className={"d-flex justify-content-center " + this.props.className}>
        <div className="paginate__item--active font-weight-bold font__poppins small text-center mx-2">
            <span>1</span>
        </div>
        <div className="paginate__item font-weight-bold font__poppins small text-center mx-2">
            <span>2</span>
        </div>
        <div className="paginate__item font-weight-bold font__poppins small text-center mx-2">
            <span>3</span>
        </div>
      </div>
    )
  }
}
