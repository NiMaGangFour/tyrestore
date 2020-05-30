import React, { Component } from "react";
import "../UICards.scss";

class UIHorizontalCard extends Component {
  addProdToCart = () => {
    this.props.addToCart();
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
                <h5 className="card-title">{this.props.prodInfo.prod_name}</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                {/* {prodInfo.prod_status === "Available" ? (
                <p className="card-text">
                  <span class="badge badge-success">
                    {prodInfo.prod_status}
                  </span>
                </p>
              ) : (
                <p className="card-text">
                  <span class="badge badge-danger">{prodInfo.prod_status}</span>
                </p>
              )} */}
                <p className="card-text">
                  <span class="badge badge-success">
                    Simply order 4 tyres and have delivery included.
                  </span>
                </p>
                <button
                  href="/"
                  className="btn btn-primary ct-button-1"
                  onClick={() => this.addProdToCart()}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UIHorizontalCard;
