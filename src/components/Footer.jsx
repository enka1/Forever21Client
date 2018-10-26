import React, { Component } from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
    min-height: 75vh;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .2)) ,url(https://picture.dzogame.vn/Img/5_pp_472.jpg);
`

export default class Footer extends Component {
    render() {
        return (
            <FooterStyle className={this.props.className}>

            </FooterStyle>
        )
    }
}


