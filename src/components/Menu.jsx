import React, { Component } from 'react'

import { history } from '../routes'

export default class Menu extends Component {
    render() {
        return (
            <ul className={this.props.className}>
                <li className="list-inline-item primary-menu-item font__poppins mx-4" onClick={() => history.push('/')}>Home</li>
                <li className="list-inline-item primary-menu-item font__poppins mx-4" onClick={() => history.push('/shop')}>Shop</li>
                <li className="list-inline-item primary-menu-item font__poppins mx-4">Collections</li>
                <li className="list-inline-item primary-menu-item font__poppins mx-4">Contact Us</li>
            </ul>
        )
    }
}
