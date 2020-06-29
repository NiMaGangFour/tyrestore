import React, { Component } from "react";
import { connect } from "react-redux";
import "../UICards.scss";

class UICartOrderSummary extends Component {
  totalPrice = () => {
    let cart = this.props.cart;
    let tempSum = 0;
    cart.map((prod) => {
      tempSum = tempSum + prod.prod_count * prod.prod_data.prod_price;
    });

    return <h5>Total Price: ${tempSum}</h5>;
  };

  render() {
    console.log(this.props.cart);
    return (
      <div class="card text-center ct-card-UICartOrderSummary">
        {/* <div class="card-header">Featured</div> */}
        <div class="card-body">
          <h5>ORDER SUMMARY</h5>
          {/* <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
        <div class="card-body">
          <h5>{this.props.totalProdCount} Items</h5>
        </div>
        <div class="card-body ct-totalPrice">{this.totalPrice()}</div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.product.cart,
    totalProdCount: state.product.totalProdCount,
    // singleProdCount: state.product.singleProdCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onAddProdToCart: (prodInfo) => dispatch(actions.addProdToCart(prodInfo)),
    //   onSetProduct: (productForm) => dispatch(actions.setProduct(productForm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UICartOrderSummary);
