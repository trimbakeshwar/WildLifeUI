import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import swiperslide1 from '../Assetes/swiperslide1.jpg'
import swiperslide2 from '../Assetes/swiperslide2.jpg'
import "../Styles/swiper.scss"
import "bootstrap/dist/css/bootstrap.min.css";
import Hedder from "./hedder"
import Swiper from "./swiper"
import LowerHedder from "./lowerheder"
export default  class Dashbord extends Component{
    render() {
        return (
            <div>
                <div><Hedder /></div>
                <div><LowerHedder /></div>
                <div><Swiper /></div>
               
            </div>
        );
    }
}