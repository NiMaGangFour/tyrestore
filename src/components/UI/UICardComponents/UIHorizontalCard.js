import React, { Component } from "react";

import {
  RiDeleteBin5Line,
  RiAddBoxLine,
  RiCheckboxIndeterminateLine,
} from "react-icons/ri";
import "../UICards.scss";

class UIHorizontalCard extends Component {
  state = {
    prodCount: 1,
  };

  increaseSingleProdCount = () => {
    let tempProdCount = this.state.prodCount;
    console.log(tempProdCount);
    this.setState({ prodCount: tempProdCount + 1 });
  };

  decreaseSingleProdCount = () => {
    let tempProdCount = this.state.prodCount;
    console.log(tempProdCount);
    if (tempProdCount > 1) {
      this.setState({ prodCount: tempProdCount - 1 });
    }
  };

  addProdToCart = () => {
    let tempProdCount = this.state.prodCount;
    this.props.addToCart(tempProdCount);
  };

  render() {
    return (
      <div>
        <div className="card mb-3">
          <h5 class="card-header">Tyre Overview</h5>
          <div className="row no-gutters">
            <div className="col-md-4">
              {/* <img src="..." className="card-img" alt="prod" /> */}
              {this.props.imgSrc}
            </div>
            <div className="col-md-8">
              <div className="card-body UIHorizontalCard-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <h5>Product Name</h5>
                    {this.props.prodInfo.prod_name}
                  </li>
                  <li class="list-group-item">
                    <h5>Product Information</h5>
                    {this.props.prodInfo.prod_info}
                  </li>
                  <li class="list-group-item">
                    <h5>Product Details</h5>
                    {this.props.prodInfo.prod_details}
                  </li>
                  <li class="list-group-item">
                    <h5>
                      <span class="badge badge-success">
                        Simply order 4 tyres and have delivery included.
                      </span>
                    </h5>
                  </li>
                </ul>

                <div className="ct-3-btns">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-secondary ct-button-1"
                      onClick={() => this.increaseSingleProdCount()}
                    >
                      <RiAddBoxLine />
                    </button>

                    <button type="button" className="btn btn-light ">
                      {this.state.prodCount}
                    </button>

                    <button
                      type="button"
                      className="btn btn-secondary ct-button-1"
                    >
                      <RiCheckboxIndeterminateLine
                        onClick={() => this.decreaseSingleProdCount()}
                      />
                    </button>
                  </div>

                  <button
                    href="/"
                    className="btn btn-block btn-primary ct-button-1 add-to-cart-btn"
                    onClick={() => this.addProdToCart()}
                  >
                    Add to Cart
                  </button>

                  <button
                    href="/"
                    className="btn btn-block btn-lg btn-03 add-to-cart-btn"
                  >
                    Proceed to checkout ＞
                  </button>

                  <a href="/tyres">
                    <button className="btn btn-block btn-lg btn-03 add-to-cart-btn">
                      ＜ Continue shopping
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UIHorizontalCard;
