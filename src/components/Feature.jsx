import React, { Component } from 'react'

export default class Feature extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="row">
                    <div className="col-4 feature__box">
                        <div className="shadow py-4 px-3" style={{ height: 100 + "%" }}>
                            <img className="w-25 mx-auto d-block mb-3" src="https://image.flaticon.com/icons/svg/411/411763.svg" alt="" />
                            <p className="font-weight-bold font__poppins text-center feature__title">Free Shipping</p>
                            <div className="divider mx-auto mb-3"></div>
                            <p className="font__poppins text-center small">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit dolore eaque nesciunt nam pariatur autem.</p>
                        </div>
                    </div>
                    <div className="col-4 feature__box">
                        <div className="shadow py-4 px-3" style={{ height: 100 + "%" }}>
                            <img className="w-25 mx-auto d-block mb-3" src="https://image.flaticon.com/icons/svg/897/897359.svg" alt="" />
                            <p className="font-weight-bold font__poppins text-center feature__title">Special Gift</p>
                            <div className="divider mx-auto mb-3"></div>
                            <div className="font__poppins text-center small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi totam vero eum.</div>
                        </div>
                    </div>

                    <div className="col-4 feature__box">
                        <div className="shadow py-4 px-3" style={{ height: 100 + "%" }}>
                            <img className="w-25 mx-auto d-block mb-3" src="https://image.flaticon.com/icons/svg/945/945948.svg" alt="" />
                            <p className="font-weight-bold font__poppins text-center feature__title">Money Back</p>
                            <div className="divider mx-auto mb-3"></div>
                            <div className="font__poppins text-center small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quidem nisi cupiditate quis?</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
