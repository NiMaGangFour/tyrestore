import React, { Component } from "react";

import { Card, Button, Row, Col } from "react-bootstrap";
import { FaShippingFast } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline, IoIosHeartEmpty } from "react-icons/io";

import "./UICards.scss";

class UIFunctionCard extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Card className="card-bg-01">
              <Card.Body>
                <Card.Title className="card-title">
                  Do you know which product to choose ?
                </Card.Title>
                <Card.Text className="card-text">We're here to help</Card.Text>
                <Button className="btn-01">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UIFunctionCard;
