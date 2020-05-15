import React, { Component } from "react";

import { connect } from "react-redux";
import axios from "axios";

// import { ListGroup } from "react-bootstrap";

import "./UIProList.scss";
import * as actions from "../../store/actions/index";
import UIProConfirmation from "./UIProConfirmation";

class UIProUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      productName: "",
      productBrand: "",
      productPrice: "",
      productStatus: "Available",
      productInformation: "",
      productDetails: "",
      imgPreview: false,
      imgSrcPreview: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    // console.log("nextProps.productForm : " + nextProps.productForm);
    // console.log("nextProps.imageData : " + nextProps.imageData);
    // console.log("nextProps : " + nextProps);
    // console.log("this.props.uploaded : " + this.props.uploaded);
    // console.log("nextProps.uploaded : " + nextProps.uploaded);
    if (nextProps.imageUploaded) {
      this.setState({
        imgPreview: false,
      });

      console.log("imgPreview : " + this.state.imgPreview);
    }
  }

  // changeHandler: Product Details
  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // Method: Upload Product Details
  uploadProduct() {
    const productForm = {
      productName: this.state.productName,
      productBrand: this.state.productBrand,
      productPrice: this.state.productPrice,
      productStatus: this.state.productStatus,
      productInformation: this.state.productInformation,
      productDetails: this.state.productDetails,
      productImageId: this.props.imageData.id,
    };

    console.log(
      "uploadProduct() ===>productForm:" + productForm.productImageId
    );
    this.props.onSetProduct(productForm);
  }

  // changeHandler: Product's Image
  onChangeImgHandler = (event) => {
    // console.log(event.target.files[0]);

    //Method: Image Preview
    if (event.target.files[0]) {
      var file = event.target.files[0];

      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.setState({
          imgSrcPreview: [reader.result],
          selectedFile: file,
          imgPreview: true,
        });
        // console.log(this.state.imgSrcPreview);
      };
    }
  };

  // Method: Upload Product‘s Image
  uploadProductImg() {
    const selectedFile = this.state.selectedFile;
    // console.log("uploadProductImg() ===>ImgInfo:" + selectedFile);
    this.props.onSetProductImg(selectedFile);
  }

  deleteProductImg(imageData) {
    console.log(">deleteProductImg");
    // const selectedFile = this.state.selectedFile;
    // console.log("uploadProductImg() ===>ImgInfo:" + selectedFile);
    this.props.onDeleteProductImg(imageData);
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <h2>Product Editor </h2>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              {/* <div className="card" style={{ width: "18rem" }}> */}
              {this.props.imageUploaded ? (
                <div className="card border-success mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Product Image Details</h5>
                    <h5 className="card-text">{this.state.imgOriginalName}</h5>
                  </div>
                  <ul class="list-group" style={{ textAlign: "left" }}>
                    <li class="list-group-item">
                      Image id [MongoDB id]:{this.props.imageData.id}
                    </li>
                    <li class="list-group-item">
                      Image Originalname: {this.props.imageData.originalname}
                    </li>
                    <li class="list-group-item">
                      Image Filename: {this.props.imageData.filename}
                    </li>
                    <li class="list-group-item">
                      Bucket Name:{this.props.imageData.bucketName}
                    </li>
                    <li class="list-group-item">
                      Image Upload Date: {this.props.imageData.uploadDate}
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="card border-warning">
                  <div className="card-body">
                    <h5 className="card-title ">No Image</h5>
                    <h5 className="card-text">{this.state.imgOriginalName}</h5>
                  </div>
                  <ul class="list-group" style={{ textAlign: "left" }}>
                    <li class="list-group-item">No Image Can't be detected!</li>
                    <li class="list-group-item">Image Originalname: N/A </li>
                    <li class="list-group-item">Image Filename: N/A</li>
                    <li class="list-group-item">Bucket Name: N/A</li>
                    <li class="list-group-item">Image Upload Date: N/A</li>
                  </ul>
                  {/* <div className="card-body">
                    <a href="#" className="card-link">
                      Card link
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div> */}
                </div>
              )}
            </div>

            <div className="col-sm">
              <div className="form-group">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupFileAddon01">
                      Upload
                    </span>
                  </div>
                  <div class="custom-file">
                    <input
                      ref="file"
                      type="file"
                      className="custom-file-input"
                      id="file"
                      onChange={(event) => this.onChangeImgHandler(event)}
                      class="custom-file-input"
                      aria-describedby="inputGroupFileAddon01"
                    />
                    <label class="custom-file-label" for="file">
                      Choose file
                    </label>
                  </div>
                </div>

                {this.state.imgPreview ? (
                  <div className="card text-center border-warning mb-3">
                    <div className="card-body">
                      <h4 className="mb-3">Image Preview</h4>
                      <img
                        className="card-img-top"
                        style={{ width: "20%" }}
                        src={this.state.imgSrcPreview}
                        alt="ProImgPreview"
                      />
                    </div>
                  </div>
                ) : null}

                {this.props.imageUploaded ? (
                  <div className="card text-center border-success mb-3">
                    <div className="card-body">
                      <h4 className="mb-3">Image already in MongoDB</h4>
                      <img
                        className="card-img-top"
                        style={{ width: "20%" }}
                        src={this.props.imageSrc}
                        alt="ProductImage"
                      />
                    </div>
                  </div>
                ) : null}

                {this.props.imageLoading ? (
                  <button class="btn btn-primary btn-block" disabled>
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Image Uploading...
                  </button>
                ) : this.props.imageUploaded ? (
                  <button
                    className="btn btn-danger btn-block"
                    onClick={() => this.deleteProductImg(this.props.imageData)}
                  >
                    Delete Current Image
                  </button>
                ) : (
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => this.uploadProductImg()}
                  >
                    Upload Image
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <hr />

        <h2>Product Form</h2>
        {/* <form action="/upload" method="POST" encType="multipart/form-data"> */}
        <div className="container">
          <div class="row">
            <div className="col-sm-6">
              <div class="card">
                <div className="card-body">
                  <label for="productName">Product Name</label>
                  <input
                    name="productName"
                    type="text"
                    className="form-control"
                    id="productName"
                    value={this.state.productName}
                    onChange={(event) => this.changeHandler(event)}
                    // onChange={(event) => this.handleChangeProductName(event)}
                  />

                  <label for="productBrand">Product Brand</label>
                  <input
                    name="productBrand"
                    type="text"
                    className="form-control"
                    id="productBrand"
                    value={this.state.productBrand}
                    onChange={(event) => this.changeHandler(event)}
                    // onChange={(event) => this.handleChangeProductBrand(event)}
                  />

                  <label for="productPrice">Product Price</label>
                  <input
                    name="productPrice"
                    type="text"
                    className="form-control"
                    id="productPrice"
                    value={this.state.productPrice}
                    onChange={(event) => this.changeHandler(event)}
                    // onChange={(event) => this.handleChangeProductPrice(event)}
                  />

                  <label for="Status">Status</label>
                  <select
                    name="productStatus"
                    id="Status"
                    className="form-control"
                    onChange={(event) => this.changeHandler(event)}
                    // onChange={(event) => this.handleChangeProductStatus(event)}
                  >
                    <option selected value="Available">
                      Available
                    </option>
                    <option value="Sold Out">Sold Out</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <label for="productInformation">Product Information</label>
                  <input
                    name="productInformation"
                    type="text"
                    className="form-control"
                    id="productInformation"
                    placeholder="e.g. Product Information"
                    value={this.state.productInformation}
                    onChange={(event) => this.changeHandler(event)}
                    //   onChange={(event) => this.handleChangeProductInformation(event)}
                  />
                  <label for="productDetails">Product Details</label>
                  <input
                    name="productDetails"
                    type="text"
                    className="form-control"
                    id="productDetails"
                    placeholder="e.g. 224 35 R17"
                    value={this.state.productDetails}
                    onChange={(event) => this.changeHandler(event)}
                    //   onChange={(event) => this.handleChangeProductDetails(event)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="container">
          {/* <div className="row"> */}
          <div className="card text-center">
            {/* <div className="card-header">Feature</div> */}
            <div className="card-body">
              {this.props.imageUploaded ? (
                <div>
                  <label class="sr-only" for="inlineFormInputGroup">
                    Username
                  </label>
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        Product Image id [MongoDB id]
                      </div>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="inlineFormInputGroup"
                      placeholder={this.props.imageData.id}
                      disabled
                    />
                  </div>
                </div>
              ) : null}
              {this.props.formLoading ? (
                <button
                  class="btn btn-primary btn-block"
                  type="button"
                  disabled
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Form Uploading...
                </button>
              ) : (
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => this.uploadProduct()}
                >
                  Upload Product Information
                </button>
              )}
            </div>
            {/* <div className="card-footer text-muted">2 days ago</div> */}
          </div>
          {/* </div> */}
        </div>
        {this.props.formUploaded ? (
          <UIProConfirmation
            imageSrc={this.props.imageSrc}
            imageData={this.props.imageData}
            productForm={this.props.productForm}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productForm: state.product.productForm,
    formUploaded: state.product.formUploaded,
    formLoading: state.product.formLoading,
    imageData: state.product.imageData,
    imageSrc: state.product.imageSrc,
    imageLoading: state.product.imageLoading,
    imageUploaded: state.product.imageUploaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onAddProduct: () => dispatch(actions.addProduct()),
    onSetProduct: (productForm) => dispatch(actions.setProduct(productForm)),
    onSetProductImg: (selectedFile) =>
      dispatch(actions.setProductImg(selectedFile)),
    onDeleteProductImg: (imageData) =>
      dispatch(actions.deleteProductImg(imageData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UIProUploadForm);
