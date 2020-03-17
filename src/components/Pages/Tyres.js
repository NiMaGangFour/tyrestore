import React, { Component } from "react";

import { Container, Row, Col, Form } from "react-bootstrap";
class Tyres extends Component {
  render() {
    return (
      <div className="switch-component">
        <h1>Tyres Page</h1>
        <Container>
          <Row>
            <Col style={{ backgroundColor: "green" }} lg="2" sm={2}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>

                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>

                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col style={{ backgroundColor: "aqua" }} lg="10" sm={10}>
              sm=8
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Tyres;
