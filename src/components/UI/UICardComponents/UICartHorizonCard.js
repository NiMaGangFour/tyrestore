import React, { Component } from "react";
import {
  RiDeleteBin5Line,
  RiAddBoxLine,
  RiCheckboxIndeterminateLine,
} from "react-icons/ri";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import "../UICards.scss";

class UICartHorizonCard extends Component {
  // state = {
  //   singleProdCount: null,
  // };

  deletePordInCart = () => {
    alert("deletePordInCart");
  };

  componentWillReceiveProps(nextProps) {
    console.log(
      "Header.js    componentWillReceiveProps>>",
      nextProps.singleProdCount
    );
  }

  imgSrc = () => {
    const imageSrc =
      "/prodsImage/image/" + this.props.prod.prod_data.prod_image_id;
    return (
      // <Card.Img variant="top" src={imageSrc} style={{ maxWidth: "240px" }} />
      <img
        className="card-img UIHorizon-Cart-img"
        src={imageSrc}
        alt={imageSrc}
      />
    );

    // this.props.cart._id
  };

  increaseSingleProdCount = (id) => {
    // console.log("increaseSingleProdCount");
    this.props.onIncreaseSingleProdCount(id);
  };

  decreaseSingleProdCount = (id) => {
    this.props.onDecreaseSingleProdCount(id);
  };

  deletePordInCart = (id) => {
    this.props.onDeletePordInCart(id);
  };

  subTotal = () => {
    let count = this.props.prod.prod_count;
    let price = this.props.prod.prod_data.prod_price;
    let subTotal = count * price;
    return <h5> $ {subTotal}</h5>;
  };

  render() {
    console.log("UICartHoeizonCard.js", this.props);
    return (
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4">
            {/* <img src="..." className="card-img" alt="prod" /> */}
            {this.imgSrc()}
          </div>
          <div className="col-md-3">
            <div className="card-body UIHorizon-Cart-card-body">
              <h3 className="card-title">
                {this.props.prod.prod_data.prod_name}
              </h3>
              {this.props.prod.prod_data.prod_info}
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-body">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-secondary ct-button-1"
                  onClick={() =>
                    this.increaseSingleProdCount(this.props.prod._id)
                  }
                >
                  <RiAddBoxLine />
                </button>

                <button type="button" className="btn btn-light ">
                  {this.props.prod.prod_count}
                </button>

                <button type="button" className="btn btn-secondary ct-button-1">
                  <RiCheckboxIndeterminateLine
                    onClick={() =>
                      this.decreaseSingleProdCount(this.props.prod._id)
                    }
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card-body">
              {this.subTotal()}
              <button
                type="button"
                class="btn btn-outline-danger ct-delete-btn"
                onClick={() => this.deletePordInCart(this.props.prod._id)}
              >
                <RiDeleteBin5Line />
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
    singleProdCount: state.product.singleProdCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseSingleProdCount: (id) =>
      dispatch(actions.increaseSingleProdCount(id)),
    onDecreaseSingleProdCount: (id) =>
      dispatch(actions.decreaseSingleProdCount(id)),
    onDeletePordInCart: (id) => dispatch(actions.deletePordInCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UICartHorizonCard);
