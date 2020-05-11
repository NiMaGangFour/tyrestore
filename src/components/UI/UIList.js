import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

class UIList extends Component {
  render() {
    // console.log(this.props);

    return (
      <div>
        {/* <Card style={{ width: "auto" }}>
          <Card.Header>Featured</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card> */}

        <ListGroup style={{ textAlign: "left" }}>
          <ListGroup.Item style={this.props.style}>
            <span style={{ fontSize: "30px", padding: "0 5px 0 0" }}>
              {this.props.icon}
            </span>
            <span
              style={{
                fontSize: "15px",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              {this.props.list_title}
            </span>
          </ListGroup.Item>
          <ListGroup.Item style={this.props.style}>
            <a style={this.props.style_a} href="/">
              {this.props.list_text_01}
            </a>
          </ListGroup.Item>
          <ListGroup.Item style={this.props.style}>
            <a style={this.props.style_a} href="/">
              {this.props.list_text_02}
            </a>
          </ListGroup.Item>
          <ListGroup.Item style={this.props.style}>
            <a style={this.props.style_a} href="/">
              {this.props.list_text_03}
            </a>
          </ListGroup.Item>
          <ListGroup.Item style={this.props.style}>
            <a style={this.props.style_a} href="/">
              {this.props.list_text_04}
            </a>
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default UIList;
