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
        <Row className="justify-content-md-center row-ct">
          <Col sm={4}>
            <Card style={{ width: "10rem" }}>
              <div className="icon">
                <FaShippingFast />
              </div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card style={{ width: "10rem" }}>
              <div className="icon">
                <FaShippingFast />
              </div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card style={{ width: "10rem" }}>
              <div className="icon">
                <FaShippingFast />
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
