import React, { Component } from 'react'
import styled from 'styled-components'

const Subcribe = styled.div`
    position:relative;
    height: 45vh;
    background-position:center;
    background-image: url(//cdn.shopify.com/s/files/1/0044/6929/3126/files/bg-subscribe.jpg?v=1537158013);
    .subcribe__content{
        color:#999;
        font-weight: 400;
        font-size: .8rem;
        letter-spacing: .05rem
    }
    .subcribe__box{
        width: 35%;
    }
`

export default class Brand extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <Subcribe className="d-flex align-items-center justify-content-center">
                    <div className="subcribe__box">
                        <p className="title text-center font__raleway">Subcribe</p>
                        <p className="subcribe__content text-center font__poppins">Subscribe to the Halora mailing list to receive updates on
                        new arrivals, special offers and other discount information.</p>
                        <input className="form-control mt-4" />
                    </div>
                </Subcribe>
                <div className="container mt-5">
                    <div className="row mt-5 py-5" style={{
                        borderTop: "1px #666 dotted"
                    }}>
                        <div className="col-2 d-flex align-items-center px-5">
                            <img className="w-100" src="https://shyft.zendesk.com/hc/article_attachments/360002281668/Forever21Logo.png" alt="" />
                        </div>
                        <div className="col-2 d-flex align-items-center px-5">
                            <img className="w-100" src="https://adc3ef35f321fe6e725a-fb8aac3b3bf42afe824f73b606f0aa4c.ssl.cf1.rackcdn.com/tenantlogos/23401.png" alt="" />
                        </div>
                        <div className="col-2 d-flex align-items-center px-5">
                            <img className="w-100" src="https://seeklogo.com/images/J/jadore-dior-logo-28AC1F3180-seeklogo.com.png" alt="" />
                        </div>
                        <div className="col-2 d-flex align-items-center px-5">
                            <img className="w-100" src="https://web.buyatab.com/wp-content/uploads/2017/05/GAP-apparel-denim-jeans-outerwear-logo_7o8Vibb.svg" alt="" />
                        </div>
                        <div className="col-2 d-flex align-items-center px-5">
                            <img className="w-100" src="https://logos-download.com/wp-content/uploads/2016/02/Zara_Logo_png_transparent.png" alt="" />
                        </div>
                        <div className="col-2 d-flex align-items-center px-5">
                            <img className="w-100" src="https://seeklogo.com/images/G/givenchy-logo-B1FAD9A0DF-seeklogo.com.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
