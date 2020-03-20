import React, { Component } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { FaShippingFast } from "react-icons/fa";
import "./UIFilter.scss";

class UIFilter extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <h3 className="h3">FILTER</h3>
          <Form.Label>
            <h4>Brand</h4>
          </Form.Label>
          <Form.Control className="cont-select" as="select">
            <option>All</option>
            <option>Brand A</option>
            <option>Brand B</option>
            <option>Brand C</option>
          </Form.Control>
          <Form.Label>
            <h4>Price</h4>
          </Form.Label>
          <Form.Control as="select">
            <option>All</option>
            <option>$200 - $250</option>
            <option>$250 - $300</option>
            <option>$300 - $350</option>
            <option>$350 - $500</option>
          </Form.Control>
          <Button className="btn-search">Refine Search</Button>{" "}
          <Button className="btn-clear">Clear all</Button>
        </Form.Group>
      </div>
    );
  }
}

export default UIFilter;
