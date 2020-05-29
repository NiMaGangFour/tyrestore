import React, { Component } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

import "../UICards.scss";

class UICartHorizonCard extends Component {
  // addProdToCart = () => {
  //   this.props.addToCart();
  // };

  deletePordInCart = () => {
    alert("deletePordInCart");
  };

  imgSrc = () => {
    const imageSrc =
      "/prodsImage/image/" + this.props.prod.prod_data.prod_image_id;
    return (
      // <Card.Img variant="top" src={imageSrc} style={{ maxWidth: "240px" }} />
      <img
        className="card-img UIHorizontalCard-img"
        src={imageSrc}
        alt={imageSrc}
      />
    );

    // this.props.cart._id
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="card mb-3">
          {/* <h5 class="card-header">Tyre Overview</h5> */}
          <div className="card-header ct-cart-header delete-icon">
            <p className="delete-icon" onClick={this.deletePordInCart}>
              <RiDeleteBin5Line />
            </p>
          </div>
          <div className="row no-gutters">
            <div className="col-md-4">
              {/* <img src="..." className="card-img" alt="prod" /> */}
              {this.imgSrc()}
            </div>
            <div className="col-md-8">
              <div className="card-body UIHorizontalCard-body">
                <h5 className="card-title">
                  {/* {this.props.cart.prod_data.prod_name} */}
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>

                <p className="card-text">
                  <span class="badge badge-success">
                    Simply order 4 tyres and have delivery included.
                  </span>
                </p>
                <button
                  href="/"
                  className="btn btn-primary ct-button-1"
                  //   onClick={() => this.addProdToCart()}
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

export default UICartHorizonCard;
