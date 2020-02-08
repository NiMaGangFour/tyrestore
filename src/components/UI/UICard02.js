import React, { Component } from "react";

import { Card, Button, Row, Col } from "react-bootstrap";
import "./UICard02.scss";

class UICard02 extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <Card.Img
                  variant="top"
                  src={this.props.CardImg}
                  style={this.props.CardImgStyle}
                />
              </Col>
              <Col>
                <Card.Title className="card_title">
                  {this.props.cardTitle}
                </Card.Title>
                <Card.Text className="card_text">
                  {this.props.cardText}
                </Card.Text>
                <Button
                  className="card_btn"
                  variant={this.props.cardButtonVarient}
                >
                  {this.props.cardButtomText}
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default UICard02;
