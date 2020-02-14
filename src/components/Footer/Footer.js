import React, { Component } from "react";
import {
  Row,
  Col,
  ListGroup,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

import Logo_White from "../css/images/logoWhite.png";
import UIList from "../UI/UIList";

import "./Footer.scss";

import { FaShippingFast } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline, IoIosHeartEmpty } from "react-icons/io";

class Footer extends Component {
  render() {
    return (
      <div className="footer-bg">
        <Row className="justify-content-md-center row-ct">
          <Col sm={3}>
            <UIList
              icon={[<FaShippingFast />]}
              style={{
                backgroundColor: "#2b3c90",
                color: "white"
                // border: "none",
              }}
              list_title="title"
              list_text_01="text1"
              list_text_02="text1"
              list_text_03="text1"
              list_text_04="text"
            />
          </Col>
          <Col sm={3}>
            <UIList
              style={{
                backgroundColor: "#2b3c90",
                color: "white",
                border: "none"
              }}
              list_title="title"
              list_text_01="text1"
              list_text_02="text1"
              list_text_03="text1"
              list_text_04="text"
            />
          </Col>
          <Col sm={3}>
            <UIList
              style={{
                backgroundColor: "#2b3c90",
                color: "white",
                border: "none"
              }}
              list_title="title"
              list_text_01="text1"
              list_text_02="text1"
              list_text_03="text1"
              list_text_04="text"
            />
          </Col>
          <Col sm={3}>
            <UIList
              style={{
                backgroundColor: "#2b3c90",
                color: "white",
                border: "none"
              }}
              list_title="title"
              list_text_01="text1"
              list_text_02="text1"
              list_text_03="text1"
              list_text_04="text"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
