import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

import ImageSlider from "../UI/ImageSlider";
import "../css/Components.css";

import supermate_logo from "../css/images/supermate_logo.png";
import raceone_logo from "../css/images/raceone_logo.png";
import tyre_01 from "../css/images/tyre_01.png";
import tyre_02 from "../css/images/tyre_02.png";
import tyre_03 from "../css/images/tyre_03.png";
import tyre_04 from "../css/images/tyre_04.png";
import UICard from "../UI/UICard";
import UICard02 from "../UI/UICard02";
import UICard03 from "../UI/UICard03";
import UIFunctionCard from "../UI/UIFunctionCard";

class Landing extends Component {
  render() {
    return (
      <div className="switch-component">
        <h1>Landing Page</h1>
        <ImageSlider
          ImageSliderImageStyle={{ height: "30rem", width: "100%" }}
        />
        <h1>The Official Store of </h1>
        <Container>
          <Row>
            <Col sm={6}>
              <UICard
                cardTitle="SuperMate"
                cardText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                CardImg={supermate_logo}
                CardImgStyle={{
                  height: "15rem",
                  width: "100%",
                  border: "2px solid #000"
                }}
                cardButtomText="button"
                cardButtonVarient="outline-primary"
              />
            </Col>
            <Col sm={6}>
              <UICard
                cardTitle="title"
                cardText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                CardImg={raceone_logo}
                CardImgStyle={{
                  height: "15rem",
                  width: "100%",
                  border: "2px solid #000"
                }}
                cardButtomText="button"
                cardButtonVarient="outline-primary"
              />
            </Col>
          </Row>
          <h3>Tyrestore, a world leader in tyres.</h3>
          <Row className="justify-content-md-center row-ct">
            <Col sm={6}>
              <UICard02
                cardTitle="BaX-3rd"
                cardText="Long Life on Roads."
                CardImg={tyre_01}
                CardStyle={{ float: "right" }}
                CardImgStyle={{
                  height: "15rem",
                  width: "100%"
                }}
                cardButtomText="Shop"
                cardButtonVarient="outline-primary"
              />
            </Col>
            <Col sm={6}>
              <UICard02
                cardTitle="D01-NEW Gen"
                cardText="Good for Daily"
                CardImg={tyre_02}
                CardImgStyle={{
                  height: "15rem",
                  width: "100%"
                }}
                cardButtomText="Shop"
                cardButtonVarient="outline-primary"
              />
            </Col>
          </Row>
          <Row className="justify-content-md-center row-ct">
            <Col sm={6}>
              <UICard02
                cardTitle="Bate Walker"
                cardText="Enjoy your quite."
                CardImg={tyre_03}
                CardStyle={{ float: "right" }}
                CardImgStyle={{
                  height: "15rem",
                  width: "100%"
                }}
                cardButtomText="Shop"
                cardButtonVarient="outline-primary"
              />
            </Col>
            <Col sm={6}>
              <UICard02
                cardTitle="R770 Black"
                cardText="Ready for race"
                CardImg={tyre_04}
                CardImgStyle={{
                  height: "15rem",
                  width: "100%"
                }}
                cardButtomText="Shop"
                cardButtonVarient="outline-primary"
              />
            </Col>
          </Row>
          <Row className="justify-content-md-center row-ct">
            <UICard03 />
          </Row>
          <Row className="justify-content-md-center row-ct">
            <UIFunctionCard />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landing;
