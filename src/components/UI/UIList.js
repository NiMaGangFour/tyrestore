import React, { Component } from "react";
import {
  Row,
  Col,
  ListGroup,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

import { FaShippingFast } from "react-icons/fa";

class UIList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ListGroup>
          <ListGroup.Item style={this.props.style}>
            {this.props.icon}
            {this.props.list_title}
          </ListGroup.Item>
          <ListGroup.Item style={this.props.style}>
            {this.props.list_text_01}
          </ListGroup.Item>
          <ListGroup.Item style={this.props.style}>
            {this.props.list_text_02}
          </ListGroup.Item>
          <ListGroup.Item style={this.props.style}>
            {this.props.list_text_03}
          </ListGroup.Item>
          <ListGroup.Item style={this.props.style}>
            {this.props.list_text_04}
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default UIList;
