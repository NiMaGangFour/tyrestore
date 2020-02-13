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
import img_Bridgeston from "../css/images/Bridgestone Potenza Adrenalin RE003 Tyres 195:60R15 88V.png";
import img_Continental_01 from "../css/images/Continental ContiSportContact 3.png";
import img_Continental_02 from "../css/images/Continental UltraContact UC6 Tyres 205:65R15 94V.png";
import img_Michelin from "../css/images/Michelin Primacy 4 Tyres 205:55R16 91W $149.png";
import big_circle_img from "../css/images/big_circle_img.png";

import UICard from "../UI/UICard";
import UICard02 from "../UI/UICard02";
import UICard03 from "../UI/UICard03";
import UIFunctionCard from "../UI/UIFunctionCard";
import UIFunctionCard02 from "../UI/UIFunctionCard02";
import UIFeaturedCard from "../UI/UIFeaturedCard";

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
          <Row className="justify-content-md-center row-ct">
            <h2 className="header-h2 row-ct">Featured products</h2>
          </Row>
          <Row className="justify-content-md-center row-ct">
            <Col md={6} lg="3">
              <UIFeaturedCard
                cardTitle="Bridgestone Potenza Adrenalin RE003"
                cardLink="View product"
                CardImg={img_Bridgeston}
                CardImgStyle={{
                  height: "15rem",
                  width: "100%"
                }}
                cardButtomText="Shop"
                cardButtonVarient="outline-primary"
              />
            </Col>
            <Col md={6} lg="3">
              <UIFeaturedCard
                cardTitle="Continental ContiSportContact"
                cardLink="View product"
                CardImg={img_Continental_01}
                CardImgStyle={{
                  height: "15rem",
                  width: "100%"
                }}
                cardButtomText="Shop"
                cardButtonVarient="outline-primary"
              />
            </Col>
            <Col md={6} lg="3">
              <UIFeaturedCard
                cardTitle="Continental UltraContact"
                cardLink="View product"
                CardImg={img_Continental_02}
                CardImgStyle={{
                  height: "15rem",
                  width: "100%"
                }}
                cardButtomText="Shop"
                cardButtonVarient="outline-primary"
              />
            </Col>
            <Col md={6} lg="3">
              <UIFeaturedCard
                cardTitle="Michelin Primacy 4 Tyres"
                cardLink="View product"
                CardImg={img_Michelin}
                CardImgStyle={{
                  height: "15rem",
                  width: "100%"
                }}
                cardButtomText="Shop"
                cardButtonVarient="outline-primary"
              />
            </Col>
          </Row>
          <Row className="justify-content-md-center row-ct-02">
            <UIFunctionCard02
              CardImg={big_circle_img}
              CardImg_style={{
                width: "auto",
                position: "absolute",
                bottom: "0"
              }}
              cardTitle="Michelin Primacy 4 Tyres"
              cardText="
             Some quick example text to build on the card title and make up
             the bulk of the card's content."
              list_01="> Buy 4 items and save on delivery"
              list_02="> Re-order your favourite product with ease"
              list_03="> Manage your account details and keep track of your purchases"
              cardBtn_01="Join TyreStore"
              cardBtn_02="Login"
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landing;
