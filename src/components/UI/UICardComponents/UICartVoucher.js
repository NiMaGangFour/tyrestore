import React, { Component } from "react";
import { connect } from "react-redux";
import "../UICards.scss";

class UICartVoucher extends Component {
  render() {
    console.log(this.props.cart);
    return (
      <div class="card text-center  ct-input-group-voucher">
        {/* <div class="card-header">Featured</div> */}

        <div class="card-body">
          <h5>Got a voucher ? Apply it now</h5>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-03" type="button" id="button-addon2">
                Button
              </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(UICartVoucher);
