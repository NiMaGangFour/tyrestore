import React, { Component } from "react";

import {
  Card,
  Button,
  Row,
  Col,
  Form,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";

import "./UICards.scss";

class UIFunctionCard02 extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Row>
          <Col sm={6}>
            <Card className="card_no_border">
              <Card.Body>
                <Card.Title className="card-title">
                  {this.props.cardTitle}
                </Card.Title>
                <Card.Text className="card-text">
                  {this.props.cardText}
                </Card.Text>
              </Card.Body>
              <ul className="list">
                <li>{this.props.list_01}</li>
                <li>{this.props.list_02}</li>
                <li>{this.props.list_03}</li>
              </ul>

              <Card.Body className="buttons-left-align">
                <Button className="btn-01" variant="primary">
                  Join TyreStore
                </Button>{" "}
                <Button className="btn-02" variant="primary">
                  Login
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} style={{ position: "relative" }}>
            <Card className="card_no_border" style={this.props.CardImg_style}>
              <Card.Img src={this.props.CardImg} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UIFunctionCard02;
