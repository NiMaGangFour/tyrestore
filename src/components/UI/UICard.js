import React, { Component } from "react";

import { Card, Button } from "react-bootstrap";
import "./UICard.scss";

class UICard extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Card>
          <Card.Img
            variant="top"
            src={this.props.CardImg}
            style={this.props.CardImgStyle}
          />
          <Card.Body>
            <Card.Title>{this.props.cardTitle}</Card.Title>
            <Card.Text>{this.props.cardText}</Card.Text>
            <Button className="card_btn" variant={this.props.cardButtonVarient}>
              {this.props.cardButtomText}
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default UICard;
