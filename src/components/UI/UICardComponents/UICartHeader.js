import React, { Component } from "react";
import "../UICards.scss";
import { FaShippingFast } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline, IoIosHeartEmpty } from "react-icons/io";

class UICartHeader extends Component {
  render() {
    return (
      <div class="card-group">
        <div class="card ct-UIHorizon-cart-card">
          <div class="card-body">
            <div className="icon">
              <IoIosCheckmarkCircleOutline />
            </div>
            <h5 class="card-title">Always available</h5>
          </div>
        </div>
        <div class="card ct-UIHorizon-cart-card">
          <div class="card-body">
            <div className="icon">
              <FaShippingFast />
            </div>
            <h5 class="card-title">
              Free delivery * when 4 items are purchased in one order
            </h5>
          </div>
        </div>
        <div class="card ct-UIHorizon-cart-card">
          <div class="card-body">
            <div className="icon">
              <IoIosHeartEmpty />
            </div>
            <h5 class="card-title">Buy direct from the manufacturer</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default UICartHeader;
