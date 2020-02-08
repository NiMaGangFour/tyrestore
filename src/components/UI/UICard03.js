import React, { Component } from "react";

import { Card, Button, Row, Col } from "react-bootstrap";
import { FaShippingFast } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline, IoIosHeartEmpty } from "react-icons/io";

import "./UICard03.scss";

class UICard03 extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Row className="justify-content-md-center">
          <Col lg="4">
            <Card style={{ border: "none" }}>
              <div className="icon">
                <IoIosCheckmarkCircleOutline />
              </div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card style={{ border: "none" }}>
              <div className="icon">
                <FaShippingFast />
              </div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card style={{ border: "none" }}>
              <div className="icon">
                <IoIosHeartEmpty />
              </div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UICard03;
