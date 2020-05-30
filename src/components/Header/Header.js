import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import { connect } from "react-redux";
import equal from "fast-deep-equal";
import * as actions from "../../store/actions/index";

import "../css/Components.css";

import Logo_White from "../css/images/logoWhite.png";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";

class Header extends Component {
  state = {
    totalProdCount: 0,
  };
  componentDidMount() {
    let parsedJSlocalStorage = JSON.parse(localStorage.getItem("state"));
    if (parsedJSlocalStorage !== null) {
      let cart = parsedJSlocalStorage.product.cart;
      let tempTotalProdCount = this.state.totalProdCount;
      if (cart.length !== 0) {
        cart.map((cart) => {
          tempTotalProdCount = tempTotalProdCount + cart.prod_count;
        });
      }
      this.setState({ totalProdCount: tempTotalProdCount });
    }
  }
  // componentWillUpdate() {
  //   console.log("componentWillUpdate");
  // }

  // componentDidUpdate(prevProps) {
  //   // if (!equal(this.props.cart, prevProps.cart)) {
  //   //   console.log("Header.js    componentDidUpdate >>", this.props.cart);
  //   // }
  //   console.log(
  //     "Header.js    componentDidUpdate >>",
  //     this.props.totalProdCount
  //   );

  // }

  componentWillReceiveProps(nextProps) {
    console.log(
      "Header.js    componentWillReceiveProps>>",
      nextProps.totalProdCount
    );
    this.setState({ totalProdCount: nextProps.totalProdCount });
    // let tempTotalProdCount = this.state.totalProdCount;
    // if (nextProps.cart.length !== 0) {
    //   nextProps.cart.map((cart) => {
    //     tempTotalProdCount = tempTotalProdCount + cart.prod_count;
    //   });
    // }
    // this.setState({ totalProdCount: tempTotalProdCount });
  }

  renderBadges = () => {
    return (
      <span className="header-icon">
        <IoIosCheckmarkCircleOutline />
        <span className="badge badge-light">{this.state.totalProdCount}</span>
      </span>
    );
  };

  render() {
    // console.log("Header.js  render()>>>  this.props >>", this.props);
    return (
      <div>
        <Navbar
          fixed="top"
          expand="lg"
          bg="dark"
          variant="dark"
          className="header-bg"
        >
          {" "}
          <Navbar.Brand>
            <Nav.Link href="/">
              <img
                width="170"
                height="70"
                className="d-inline-block align-top"
                src={Logo_White}
                alt="logo"
              ></img>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/tyres">Tyres</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/faq">FAQs</Nav.Link>
              <Nav.Link href="/admin">Admin</Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/cart">
                {this.state.totalProdCount !== 0 ? (
                  this.renderBadges()
                ) : (
                  <span className="header-icon">
                    <IoIosCheckmarkCircleOutline />
                  </span>
                )}
              </Nav.Link>
            </Nav>

            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.product.cart,
    totalProdCount: state.product.totalProdCount,
    singleProdCount: state.product.singleProdCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onAddProdToCart: (prodInfo) => dispatch(actions.addProdToCart(prodInfo)),
    //   onSetProduct: (productForm) => dispatch(actions.setProduct(productForm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
