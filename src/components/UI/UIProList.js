import React, { Component } from "react";
import {
  Nav,
  Row,
  Col,
  ListGroup,
  Form,
  FormControl,
  Button,
  Card
} from "react-bootstrap";

import { FaShippingFast } from "react-icons/fa";
import "./UIProList.scss";
import img_Michelin from "../css/images/Michelin Primacy 4 Tyres 205:55R16 91W $149.png";

class UIProList extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <Col xs={2} lg="3" className="col-card">
          <Card className="prod-card">
            <Card.Img variant="top" src={img_Michelin} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}

export default UIProList;
