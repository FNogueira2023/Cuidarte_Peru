import React from "react";
import Slider from "react-slick";
import '../../public/stylesheets/home/carousel.css';
import boticaImg1 from '../../public/images/botica4.jpg';


function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slider-container',
        autoplay: true
    };
    return (
        <Slider {...settings}>
            <div>
                <img className="carousel-img" src={boticaImg1} alt="" />
            </div>
            <div>
                <img className="carousel-img" src={boticaImg1} alt="" />
            </div>
            <div>
                <img className="carousel-img" src={boticaImg1} alt="" />
            </div>
            <div>
                <img className="carousel-img" src={boticaImg1} alt="" />
            </div>
        </Slider>

    );
}

export default SimpleSlider;