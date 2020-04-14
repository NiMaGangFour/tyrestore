import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import "./UIProList.scss";

class UIProUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productBrand: "",
      productPrice: "",
      productStatus: "Available",
      productInformation: "",
      productDetails: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps is : " + nextProps.productForm);
  }

  handleChangeProductName(event) {
    this.setState({ productName: event.target.value });
  }
  handleChangeProductBrand(event) {
    this.setState({ productBrand: event.target.value });
  }
  handleChangeProductPrice(event) {
    this.setState({ productPrice: event.target.value });
  }
  handleChangeProductStatus(event) {
    this.setState({ productStatus: event.target.value });
  }
  handleChangeProductInformation(event) {
    this.setState({ productInformation: event.target.value });
  }
  handleChangeProductDetails(event) {
    this.setState({ productDetails: event.target.value });
  }

  setProduct() {
    const productForm = {
      ...this.state,
      productName: this.state.productName,
      productBrand: this.state.productBrand,
      productPrice: this.state.productPrice,
      productStatus: this.state.productStatus,
      productInformation: this.state.productInformation,
      productDetails: this.state.productDetails,
    };

    console.log("setProduct" + productForm);
    this.props.onSetProduct(productForm);
  }

  render() {
    console.log(this.props);

    return (
      <div>
        {/* <form action="/upload" method="POST" encType="multipart/form-data">
          <h2>Production Text Form</h2>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="productName">Product Name</label>
              <input type="text" class="form-control" id="productName" />
            </div>
            <div class="form-group col-md-6">
              <label for="productBrand">Product Brand</label>
              <input type="text" class="form-control" id="productBrand" />
            </div>
            <div class="form-group col-md-6">
              <label for="productPrice">Product Price</label>
              <input type="text" class="form-control" id="productPrice" />
            </div>
            <div class="form-group col-md-6">
              <label for="Status">Status</label>
              <select id="Status" class="form-control">
                <option selected>Available</option>
                <option>Sold Out</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="productInformation">Product Information</label>
            <input
              type="text"
              class="form-control"
              id="productInformation"
              placeholder="e.g. Product Information"
            />
          </div>
          <div class="form-group">
            <label for="productDetails">Product Details</label>
            <input
              type="text"
              class="form-control"
              id="productDetails"
              placeholder="e.g. 224 35 R17"
            />
          </div>
  
          <hr />
          <h2>Production Image Update</h2>
          <div className="custom-file mb-3">
            <input
              type="file"
              name="file"
              id="file"
              className="custom-file-input"
            />
            <label for="title" class="custom-file-label">
              Choose File
            </label>
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary btn-block"
          />
        </form>
        <hr />
        <img
          style={{ width: "20%" }}
          src="/image/0248538faeeefd074838d74d23787c12.png"
          alt=""
        /> */}

        <form action="/pords" method="POST" encType="multipart/form-data">
          <h2>Production Text Form</h2>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="productName">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="productName"
                value={this.state.productName}
                onChange={(event) => this.handleChangeProductName(event)}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="productBrand">Product Brand</label>
              <input
                type="text"
                className="form-control"
                id="productBrand"
                value={this.state.productBrand}
                onChange={(event) => this.handleChangeProductBrand(event)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="productPrice">Product Price</label>
              <input
                type="text"
                className="form-control"
                id="productPrice"
                value={this.state.productPrice}
                onChange={(event) => this.handleChangeProductPrice(event)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="Status">Status</label>
              <select
                id="Status"
                className="form-control"
                onChange={(event) => this.handleChangeProductStatus(event)}
              >
                <option selected value="Available">
                  Available
                </option>
                <option value="Sold Out">Sold Out</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label for="productInformation">Product Information</label>
            <input
              type="text"
              className="form-control"
              id="productInformation"
              placeholder="e.g. Product Information"
              value={this.state.productInformation}
              onChange={(event) => this.handleChangeProductInformation(event)}
            />
          </div>
          <div class="form-group">
            <label for="productDetails">Product Details</label>
            <input
              type="text"
              className="form-control"
              id="productDetails"
              placeholder="e.g. 224 35 R17"
              value={this.state.productDetails}
              onChange={(event) => this.handleChangeProductDetails(event)}
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary btn-block"
          />
        </form>
        <button
          className="btn-primary"
          //   onClick={() => this.props.onAddProduct()}
          onClick={() => this.setProduct()}
        >
          updload
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productName: state.product.productName,
    productForm: state.product.productForm,
    // ings: state.burgerBuilder.ingredients,
    // price: state.burgerBuilder.totalPrice,
    // error: state.burgerBuilder.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProduct: () => dispatch(actions.addProduct()),
    onSetProduct: (productForm) => dispatch(actions.setProduct(productForm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UIProUploadForm);
