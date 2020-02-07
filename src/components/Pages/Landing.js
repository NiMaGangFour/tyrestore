import React, { Component } from "react";
import "../css/Components.css";
import {
  Container,
  Row,
  Col,
  Image,
  FormControl,
  Button
} from "react-bootstrap";

import eamily from "../css/images/eamily.png";
import mumstore_logo from "../css/images/mumstore_logo.png";
import UICard from "../UI/UICard";

class Landing extends Component {
  render() {
    return (
      <div className="switch-component">
        <h1>Landing Page</h1>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <UICard
                cardTitle="title"
                cardText="text"
                CardImg={mumstore_logo}
                cardButtom="button"
                cardButtonVarient="danger"
              />
            </Col>
            <Col>
              <UICard />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landing;
