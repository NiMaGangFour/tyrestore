import React, { Component } from "react";
import "../UICards.scss";

class UICartListTitle extends Component {
  render() {
    return (
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4">
            <div className="card-body">
              <p>Product Image</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-body">
              <p>Product Name</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-body">
              <p>QTY</p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card-body">
              <p>SUBTOTAL</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UICartListTitle;
