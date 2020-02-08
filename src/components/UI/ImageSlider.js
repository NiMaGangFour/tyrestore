import React, { Component } from "react";

import { Carousel } from "react-bootstrap";

import tyre_bg from "../css/images/tyre_bg.png";
import tyre_bg2 from "../css/images/tyre_bg2.png";
import tyre_bg3 from "../css/images/tyre_bg3.png";

class ImageSlider extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              style={this.props.ImageSliderImageStyle}
              className="d-block w-100"
              src={tyre_bg}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={this.props.ImageSliderImageStyle}
              className="d-block w-100"
              src={tyre_bg2}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={this.props.ImageSliderImageStyle}
              className="d-block w-100"
              src={tyre_bg3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default ImageSlider;
