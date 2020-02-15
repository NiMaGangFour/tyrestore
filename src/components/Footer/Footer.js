import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col
} from "react-bootstrap";

import { FaShieldAlt } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GoPackage } from "react-icons/go";
import { TiMessages } from "react-icons/ti";

import UIList from "../UI/UIList";
import "./Footer.scss";
import Logo_White from "../css/images/logoWhite.png";
import logo_dark from "../css/images/logoDark.png";
import Logo_Author from "../css/images/siyu_logo_circle.png";

// class Footer extends Component {
//   render() {
//     return (
//       <div>

//         <Navbar expand="lg" bg="dark" variant="dark">
//           {" "}
//           <Navbar.Brand>
//             <Nav.Link href="/">
//               <img
//                 width="170"
//                 height="70"
//                 className="d-inline-block align-top"
//                 src={Logo_White}
//                 alt="logo"
//               ></img>
//             </Nav.Link>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mr-auto">
//               <Nav.Link href="/about">About</Nav.Link>
//               <Nav.Link href="/contact">Contact</Nav.Link>
//               <Nav.Link href="/news">News</Nav.Link>
//               <Nav.Link href="/faq">FAQs</Nav.Link>
//               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">
//                   Something
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//             <Form inline>
//               <FormControl
//                 type="text"
//                 placeholder="Search"
//                 className="mr-sm-2"
//               />
//               <Button variant="outline-success">Search</Button>
//             </Form>
//           </Navbar.Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

// export default Footer;

class Footer extends Component {
  render() {
    return (
      <div className="footer-bg">
        <Row className="justify-content-md-center row-ct">
          <Col xs={12} md={6} lg="3">
            <UIList
              icon={[<IoIosCheckmarkCircleOutline />]}
              style={{
                backgroundColor: "#2b3c90",
                color: "white",
                border: "none"
              }}
              list_title="OUR BRANDS"
              list_text_01="Bridgestone"
              list_text_02="Michelin"
              list_text_03="Continental"
              list_text_04="Yokohama"
            />
          </Col>
          <Col xs={12} md={6} lg="3">
            <UIList
              icon={[<GoPackage />]}
              style={{
                backgroundColor: "#2b3c90",
                color: "white",
                border: "none"
              }}
              list_title="OUR PRODUCTS"
              list_text_01="Summer tyres"
              list_text_02="All-season & All-terrain tyres"
              list_text_03="Winter tyres"
              list_text_04="All-terrain tyres"
            />
          </Col>
          <Col xs={12} md={6} lg="3">
            <UIList
              icon={[<TiMessages />]}
              style={{
                backgroundColor: "#2b3c90",
                color: "white",
                border: "none"
              }}
              list_title="HELP"
              list_text_01="About us"
              list_text_02="Contact us"
              list_text_03="FAQ"
              list_text_04="Sitemap"
            />
          </Col>
          <Col xs={12} md={6} lg="3">
            <UIList
              icon={[<FaShieldAlt />]}
              style={{
                backgroundColor: "#2b3c90",
                color: "white",
                border: "none"
              }}
              listHeaderStyle={{
                fontSize: "30px !important"
              }}
              list_title="POLICIES"
              list_text_01="Terms & Conditions"
              list_text_02="Privacy Policy"
              list_text_03="Purchasing Policy"
            />
          </Col>
        </Row>

        <Navbar style={{ backgroundColor: "#fff" }}>
          <Navbar.Text>
            Copyright © 2020 TyreStore{" "}
            <Nav.Link href="/">
              <img
                width="70"
                height="30"
                className="d-inline-block align-top"
                src={logo_dark}
                alt="logo"
              ></img>
            </Nav.Link>
          </Navbar.Text>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Powered By{" "}
              <Nav.Link href="/">
                <img
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  src={Logo_Author}
                  alt="logo"
                ></img>
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
