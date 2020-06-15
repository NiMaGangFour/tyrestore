import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import "./UICards.scss";
import "../css/Components.css";
import UICartHorizonCard from "./UICardComponents/UICartHorizonCard";

class UICart extends Component {
  state = {
    cart: null,
  };

  componentDidMount() {
    let parsedJSlocalStorage = JSON.parse(localStorage.getItem("state"));
    let cart = parsedJSlocalStorage.product.cart;
    console.log("UICart cart>>>", cart);
    //cart >>> [{…}, {…}, {…}]
    this.setState({ cart: cart });
  }

  imgSrc = (id) => {
    const imageSrc = "/prodsImage/image/" + id;
    return (
      // <Card.Img variant="top" src={imageSrc} style={{ maxWidth: "240px" }} />
      <img
        className="card-img UIHorizontalCard-img"
        src={imageSrc}
        alt={imageSrc}
      />
    );
  };

  componentWillReceiveProps(nextProps) {
    console.log(
      "UICart.js    componentWillReceiveProps  nextProps.singleProdCount>>",
      nextProps.singleProdCount
    );
    console.log(
      "UICart.js    componentWillReceiveProps  nextProps.cart>>",
      nextProps.cart
    );
    this.setState({ cart: nextProps.cart });
  }

  //   imgSrc={this.imgSrc(this.state.cart)}

  //cart >>> [{…}, {…}, {…}]
  render() {
    return (
      <div className="switch-component">
        <h2>UICart</h2>
        <div className="container">
          <div class="row">
            {/* {this.renderProducts()} */}
            {this.state.cart !== null
              ? this.state.cart.map((prod) => (
                  <div className="col-9">
                    <UICartHorizonCard prod={prod} />
                  </div>
                ))
              : null}
            <div className="col-3">
              <h2>clo=3</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.product.cart,
    singleProdCount: state.product.singleProdCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onAddProdToCart: (prodInfo) => dispatch(actions.addProdToCart(prodInfo)),
    //   onSetProduct: (productForm) => dispatch(actions.setProduct(productForm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UICart);
