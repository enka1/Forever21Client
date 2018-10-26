import React, { Component } from 'react'

import Menu from './Menu'

export default class Header extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center pt-3">
        <div className="">
          <img className="mx-auto d-block" width="55rem" src="https://image.flaticon.com/icons/svg/29/29362.svg" alt="" />       
          <span className="header__title mt-2 d-block text-center font__raleway">Maruko</span>
          <span className="header__subtitle d-block text-center font__montserrat text-muted">Fashion store</span>
          <Menu className="p-0 mt-4 mx-auto"/>
        </div>
      </div>
    )
  }
}
