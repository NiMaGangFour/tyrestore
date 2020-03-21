import React, { Component } from "react";

import { Container, Row, Col, Form, Button, Pagination } from "react-bootstrap";

import "../css/Components.css";
import UIFilter from "../UI/UIFilter";
import UIProList from "../UI/UIProList";
class Tyres extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="switch-component">
        <h1>Tyres Page</h1>{" "}
        <Container>
          <Row>
            <Col style={{ backgroundColor: "green" }} lg="2" sm={3}>
              <UIFilter />
            </Col>
            <Col style={{ backgroundColor: "aqua" }} lg="10" sm={9}>
              <Row>
                <UIProList />
                <UIProList />
                <UIProList />
                <UIProList />
                <UIProList />
                <UIProList />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Tyres;
