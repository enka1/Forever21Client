import React, { Component } from 'react'
import Checkbox from 'antd/lib/checkbox/Checkbox'

export default class ProductCategory extends Component {

    render() {
        return (
            <div className={this.props.className}>
                <p className="font__oswald category__header">Filter</p>
                <div className="divider mb-3"></div>
                <div className="font__poppins py-3 d-flex category__item" data-toggle="collapse" data-target="#1">
                    Size
                    <span className="ml-auto">
                        <img width="8px" src="https://image.flaticon.com/icons/svg/149/149156.svg" alt="" />
                    </span>
                </div>
                <div className="font__poppins py-3 mb-3 d-flex category__item" data-toggle="collapse" data-target="#color">
                    Color
                    <span className="ml-auto">
                        <img width="8px" src="https://image.flaticon.com/icons/svg/149/149156.svg" alt="" />
                    </span>
                </div>
                <div className="collapse show" id="color">
                    <div className="row m-0">
                        <Checkbox className="font__poppins text-muted col-6 m-0" style={{ fontSize: ".8rem" }}>black</Checkbox>
                        <Checkbox className="font__poppins text-muted col-6 m-0" style={{ fontSize: ".8rem" }}>brown</Checkbox>
                        <Checkbox className="font__poppins text-muted col-6 m-0" style={{ fontSize: ".8rem" }}>grey</Checkbox>
                        <Checkbox className="font__poppins text-muted col-6 m-0" style={{ fontSize: ".8rem" }}>white</Checkbox>
                        <Checkbox className="font__poppins text-muted col-6 m-0" style={{ fontSize: ".8rem" }}>red</Checkbox>
                    </div>
                </div>
            </div>
        )
    }
}
