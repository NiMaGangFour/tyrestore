import React, { Component } from "react";

import "../css/Components.css";
import "./UICards.scss";
import UIHorizontalCard from "./UICardComponents/UIHorizontalCard";
import UILongCard from "./UICardComponents/UILongCard";

import { connect } from "react-redux";
// import { ListGroup } from "react-bootstrap";

import "./UIProList.scss";
import * as actions from "../../store/actions/index";

class UIProShow extends Component {
  state = {
    prodInfo: null,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchProdInfo()
      .then((res) => this.setState({ prodInfo: res }))
      .catch((err) => console.log(err));
  }

  fetchProdInfo = async () => {
    const response = await fetch("/prods/" + this.props.match.params.variable);
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

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

  addToCart = () => {
    this.props.onAddProdToCart(this.state.prodInfo);
    console.log("prodInfo", this.state.prodInfo);
    console.log("UIProShow  this.props>>", this.props);
  };

  render() {
    console.log("UIProShow  this.props>>", this.props);

    return (
      <div className="switch-component">
        {this.state.prodInfo !== null ? (
          <div>
            <UIHorizontalCard
              addToCart={this.addToCart}
              prodInfo={this.state.prodInfo}
              imgSrc={this.imgSrc(this.state.prodInfo.prod_image_id)}
            />
            <hr />
            <UILongCard prodInfo={this.state.prodInfo} />
          </div>
        ) : (
          <h3> Can not get >>> this.state.prodInfo</h3>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.product.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProdToCart: (prodInfo) => dispatch(actions.addProdToCart(prodInfo)),
    //   onSetProduct: (productForm) => dispatch(actions.setProduct(productForm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UIProShow);
