import React, { Component } from "react";

import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { FaShippingFast } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline, IoIosHeartEmpty } from "react-icons/io";

import "./UICards.scss";

class UIFeaturedCard extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Card>
          <Card.Img
            style={this.props.CardImgStyle}
            variant="top"
            src={this.props.CardImg}
          />
          <Card.Body>
            <Card.Title>{this.props.cardTitle}</Card.Title>
            <Button className="btn-01" variant={this.props.cardButtonVarient}>
              {this.props.cardButtomText}
            </Button>
          </Card.Body>
          <Card.Body>
            <Card.Link className="card-link" href="#">
              {this.props.cardLink}
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default UIFeaturedCard;
