import React, { Component } from 'react'
import styled from 'styled-components'

const CarouselItem = styled.div`
    min-height: 80vh;
    max-height: 80vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)) ,url(${props => props.url});
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
`

export default class Carousel extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div id="NewEventCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#NewEventCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#NewEventCarousel" data-slide-to="1"></li>
                        <li data-target="#NewEventCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <CarouselItem className="d-flex align-items-center justify-content-center"
                                url="https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260">
                                <div>
                                    <span className="carousel__sub-title text-center mb-2 d-block">MEGA SUMMER SALE</span>
                                    <span className="carousel__title font__montserrat text-center d-block"><span style={{ color: "#b59677" }}>BIG DISCOUNT</span> UP TO 50%</span>
                                    <button className="btn btn-outline-light mx-auto d-block px-4 carousel__btn mt-4">Start shopping</button>
                                </div>
                            </CarouselItem>
                        </div>
                        <div className="carousel-item">
                            <CarouselItem className="d-flex align-items-center justify-content-center"
                                url="https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260">
                                <div>
                                    <span className="carousel__sub-title text-center mb-2 d-block">FALL - WINTER 2018</span>
                                    <span className="carousel__title font__montserrat text-center d-block"><span style={{ color: "#b59677" }}>NEW ARRIVALS</span> Collection</span>
                                    <button className="btn btn-outline-light mx-auto d-block px-4 carousel__btn mt-4">shop now</button>
                                </div>
                            </CarouselItem>
                        </div>
                        <div className="carousel-item">
                            <CarouselItem className="d-flex align-items-center justify-content-center"
                                url="https://images.pexels.com/photos/265705/pexels-photo-265705.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260">
                                <div>
                                    <span className="carousel__sub-title text-center mb-2 d-block">HOT TRENDING</span>
                                    <span className="carousel__title font__montserrat text-center d-block"><span style={{ color: "#b59677" }}>LOOKBOOK</span> COLLECTION</span>
                                    <button className="btn btn-outline-light mx-auto d-block px-4 carousel__btn mt-4">Start shopping</button>
                                </div>
                            </CarouselItem>
                        </div>
                        <a className="carousel-control-prev" href="#NewEventCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#NewEventCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}


