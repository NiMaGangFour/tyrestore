import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import "./UICards.scss";
import "../css/Components.css";
import UICartHorizonCard from "./UICardComponents/UICartHorizonCard";
import UICartHeader from "./UICardComponents/UICartHeader";
import UICartHeaderAnnounce from "./UICardComponents/UICartHeaderAnnounce";
import UICartListTitle from "./UICardComponents/UICartListTitle";
import UICartOrderSummary from "./UICardComponents/UICartOrderSummary";
import UICartVoucher from "./UICardComponents/UICartVoucher";

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
        <UICartHeader />
        <div className="container">
          <UICartHeaderAnnounce />
          <div class="row">
            {/* {this.renderProducts()} */}

            <div className="col-9">
              <UICartListTitle />
              {this.state.cart !== null
                ? this.state.cart.map((prod) => (
                    <div>
                      <UICartHorizonCard prod={prod} />
                    </div>
                  ))
                : null}

              <a href="/tyres">
                <button
                  className="btn btn-block btn-lg btn-03 btn-continue-shopping"
                  type="button"
                  id="button-addon2"
                >
                  ＜ Continue shopping
                </button>
              </a>
            </div>

            <div className="col-3">
              <UICartOrderSummary />

              <UICartVoucher />

              <div class="card-body ct-checkout">
                <h5>Proceed to checkout</h5>
              </div>
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
