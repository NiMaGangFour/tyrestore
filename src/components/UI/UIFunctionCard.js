import React, { Component } from "react";

import { Card, Button, Row, Col, Form } from "react-bootstrap";
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
        <Card className="card-bg-01">
          <Card.Body>
            <Card.Title className="card-title">
              Do you know which product to choose ?
            </Card.Title>
            <Card.Text className="card-text">We're here to help</Card.Text>
            <Form>
              <Form.Group>
                <Form.Label column>My car is a</Form.Label>
                <Col>
                  <Form.Control className="form-select" as="select">
                    <option>MPV</option>
                    <option>SUV</option>
                    <option>Hatch</option>
                    <option>Wagon</option>
                    <option>Sedan</option>
                  </Form.Control>
                </Col>
                <Form.Label column>with</Form.Label>
                <Col>
                  <Form.Control className="form-select" as="select">
                    <option>FWD</option>
                    <option>RWD</option>
                    <option>AWD</option>
                  </Form.Control>
                </Col>
              </Form.Group>
            </Form>
            <Card.Text className="card-text" style={{ width: "auto" }}>
              This is NOT a 100% correct reference tool and is not intended to
              replace advice from your auto mechanical professional.
            </Card.Text>
            <Button className="btn-01">View Our Products</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default UIFunctionCard;
