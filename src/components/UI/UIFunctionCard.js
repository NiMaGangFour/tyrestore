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

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="3">
                  Email
                </Form.Label>
                <Col sm="3">
                  <Form.Control as="select">
                    <option>MPV</option>
                    <option>SUV</option>
                    <option>Hatch</option>
                    <option>Wagon</option>
                    <option>Sedan</option>
                  </Form.Control>
                </Col>
                <Form.Label column sm="3">
                  Email
                </Form.Label>
                <Col sm="3">
                  <Form.Control as="select">
                    <option>MPV</option>
                    <option>SUV</option>
                    <option>Hatch</option>
                    <option>Wagon</option>
                    <option>Sedan</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              {/* <Form.Row>
                <Form.Group as={Row} controlId="formGridCity">
                  <Form.Label>My car is a </Form.Label>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select">
                    <option>MPV</option>
                    <option>SUV</option>
                    <option>Hatch</option>
                    <option>Wagon</option>
                    <option>Sedan</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>&</Form.Label>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row> */}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UIFunctionCard;
