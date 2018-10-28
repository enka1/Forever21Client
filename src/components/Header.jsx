import React, { Component } from 'react'

import { history } from '../routes'
import Search from './product/Search'
export default class Header extends Component {
  render() {
    return (
      <div className="d-flex align-items-center py-3 container">
        <div className="d-flex align-items-center">
          <img className="brand__logo mr-2" src="https://image.flaticon.com/icons/svg/214/214344.svg" alt="" />
          <span className="brand__name font__lato">Enko</span>
        </div>
        <ul className="m-0 p-0">
          <li className="list-inline-item primary-menu-item font__poppins mx-4" onClick={() => history.push('/')}>Home</li>
          <li className="list-inline-item primary-menu-item font__poppins mx-4" onClick={() => history.push('/shop')}>Shop</li>
          <li className="list-inline-item primary-menu-item font__poppins mx-4">Collections</li>
          <li className="list-inline-item primary-menu-item font__poppins mx-4">Contact Us</li>
        </ul>
        <Search/>
      </div>
    )
  }
}
