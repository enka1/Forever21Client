import React, { Component } from 'react'
import Checkbox from 'antd/lib/checkbox/Checkbox'

export default class ProductCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSizeOpen: false,
            isColorOpen: false
        }
    }
    render() {
        return (
            <div className={this.props.className}>
                <p className="font__oswald category__header">Filter</p>
                <div className="divider mb-3"></div>
                <div className="font__poppins py-3 mb-3 d-flex category__item"
                    data-toggle="collapse"
                    data-target="#size"
                    onClick={() => { this.setState({ isSizeOpen: !this.state.isSizeOpen }) }}>
                    Size
                    <span className="ml-auto">
                        <img width="8px" src={this.state.isSizeOpen ? "https://image.flaticon.com/icons/svg/59/59549.svg" : "https://image.flaticon.com/icons/svg/149/149156.svg"} alt="" />
                    </span>
                </div>
                <div className="collapse" id="size">
                    <div className="row m-0">
                        <Checkbox className="font__poppins text-muted col-6 m-0 mb-3" style={{ fontSize: ".8rem" }}>XS</Checkbox>
                        <Checkbox className="font__poppins text-muted col-6 m-0 mb-3" style={{ fontSize: ".8rem" }}>S</Checkbox>
                        <Checkbox className="font__poppins text-muted col-6 m-0 mb-3" style={{ fontSize: ".8rem" }}>M</Checkbox>
                        <Checkbox className="font__poppins text-muted col-6 m-0 mb-3" style={{ fontSize: ".8rem" }}>L</Checkbox>
                        <Checkbox className="font__poppins text-muted col-6 m-0 mb-3" style={{ fontSize: ".8rem" }}>XL</Checkbox>
                    </div>
                </div>
                <div className="font__poppins py-3 mb-3 d-flex category__item" data-toggle="collapse" data-target="#color"
                    onClick={() => { this.setState({ isColorOpen: !this.state.isColorOpen }) }}>
                    Color
                    <span className="ml-auto">
                        <img width="8px" src={this.state.isColorOpen ? "https://image.flaticon.com/icons/svg/59/59549.svg" : "https://image.flaticon.com/icons/svg/149/149156.svg"} alt="" />
                    </span>
                </div>
                <div className="collapse" id="color">
                    <div className="row m-0">
                        <Checkbox className="font__poppins text-muted col-6 m-0 mb-3" style={{ fontSize: ".8rem" }}>black</Checkbox>
                        <Checkbox className="font__poppins text-muted col-6 m-0 mb-3" style={{ fontSize: ".8rem" }}>brown</Checkbox>
                        <Checkbox className="font__poppins text-muted col-6 m-0 mb-3" style={{ fontSize: ".8rem" }}>grey</Checkbox>
                        <Checkbox className="font__poppins text-muted col-6 m-0 mb-3" style={{ fontSize: ".8rem" }}>white</Checkbox>
                        <Checkbox className="font__poppins text-muted col-6 m-0 mb-3" style={{ fontSize: ".8rem" }}>red</Checkbox>
                        <Checkbox className="font__poppins text-muted col-6 m-0 mb-3" style={{ fontSize: ".8rem" }}>blue</Checkbox>
                        <Checkbox className="font__poppins text-muted col-6 m-0 mb-3" style={{ fontSize: ".8rem" }}>green</Checkbox>
                        <Checkbox className="font__poppins text-muted col-6 m-0 mb-3" style={{ fontSize: ".8rem" }}>purple</Checkbox>
                        <Checkbox className="font__poppins text-muted col-6 m-0 mb-3" style={{ fontSize: ".8rem" }}>yellow</Checkbox>
                        <Checkbox className="font__poppins text-muted col-6 m-0 mb-3" style={{ fontSize: ".8rem" }}>denim</Checkbox>
                    </div>
                </div>
            </div>
        )
    }
}
