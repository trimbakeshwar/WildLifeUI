import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import swiperslide1 from '../Assetes/swiperslide1.jpg'
import swiperslide2 from '../Assetes/swiperslide2.jpg'
import "../Styles/swiper.scss"
import "bootstrap/dist/css/bootstrap.min.css";
import LowerHedder from "./lowerheder"
export default  class Swiper extends Component{
    render() {
        return (
            <div>
        <div className="container-fluid">
          <div className="row">
            <div>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={swiperslide1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                 
                  <div className="captionContainer">
                    <div className="SaveTextStyle">SAVE</div>
                    <div className="wildCatstextstyle">WILD CATS</div>
                    <div className="textstyle">
                      Join Wildlife, the world’s leading charity foundation,
                      which main goal is to help conserve and protect wild cats
                      and other important animal species all over the globe.
                    </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={swiperslide2}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                 
                  <div className="captionContainer">
                    <div className="SaveTextStyle">MAKE</div>
                    <div className="wildCatstextstyle">CATS SAFE</div>
                    <div className="textstyle">
                      We work to help wild cats and other animals worldwide and
                      you can create their future with us. Your donations will
                      serve the great cause of serving animals globally!
                    </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
        );}
}