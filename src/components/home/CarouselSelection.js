import React, { Component } from "react";
import Slider from "react-slick";
import SalesCart from './SalesCart';

import '../../public/stylesheets/home/carouselSelection.css';
import { Link } from "react-router-dom";

export default class SwipeToSlide extends Component {
    render() {
        const settings = {
            className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 4,
            swipeToSlide: true,
            afterChange: function (index) {
                console.log(
                    `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
                );
            }
        };
        return (
            <div className="carouselSelection">
                <div className="carouselSelectionTitles">
                    <h3 className="carouselSelectionTitle">Nuestra Selección para ti</h3>
                    <Link to="#"> <p className="carouselSelectionSubtitle"> Ver todos los productos </p></Link>
                </div>
                <Slider {...settings}>

                    <SalesCart />

                    <SalesCart />

                    <SalesCart />

                    <SalesCart />

                    <SalesCart />

                    <SalesCart />

                    <SalesCart />

                    <SalesCart />

                </Slider>
            </div>

        );
    }
}
