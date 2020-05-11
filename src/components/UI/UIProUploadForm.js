import React, { Component } from "react";

import { connect } from "react-redux";
import axios from "axios";

// import { ListGroup } from "react-bootstrap";

import "./UIProList.scss";
import * as actions from "../../store/actions/index";

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
      imgInfo: {
        imgUploaded: false,
        imgId: "",
        imgOriginalName: "",
        imgFilename: "",
        imgBucketName: "",
        imgUploadDate: "",
      },
      imgPreview: false,
      imgSrcPreview: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps.productForm : " + nextProps.productForm);
    console.log("nextProps.imageData : " + nextProps.imageData);
    console.log("nextProps : " + nextProps);
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
    };

    console.log("uploadProduct() ===>productForm:" + productForm);
    this.props.onSetProduct(productForm);
  }

  // changeHandler: Product's Image
  onChangeImgHandler = (event) => {
    console.log(event.target.files[0]);

    // var file2 = event.target.files[0];

    // console.log("file :" + file);
    // console.log("file2 :" + file2);
    // console.log(reader);
    // console.log(url);

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
        console.log(this.state.imgSrcPreview);
      };
    }

    // reader.readAsDataURL(file);

    // this.setState({
    //   selectedFile: event.target.files[0],
    //   //   loaded: 0,
    // });
    // console.log(event.target.files[0]);
  };

  // Method: Upload Product‘s Image
  uploadProductImg() {
    const selectedFile = this.state.selectedFile;
    console.log("uploadProductImg() ===>ImgInfo:" + selectedFile);
    this.props.onSetProductImg(selectedFile);
  }

  //   imgUploadHandler = () => {
  //     const data = new FormData();
  //     data.append("file", this.state.selectedFile);
  //     axios
  //       .post("/upload", data, {
  //         // receive two parameter endpoint url ,form data
  //       })
  //       .then((res) => {
  //         // then print response status
  //         console.log(res.statusText);
  //         console.log(res.data);
  //         console.log(res);
  //         this.setState({
  //           imgUploaded: true,
  //           imgId: res.data.id,
  //           imgOriginalName: res.data.originalname,
  //           imgFilename: res.data.filename,
  //           imgBucketName: res.data.bucketName,
  //           imgUploadDate: res.data.uploadDate,
  //         });
  //       });
  //   };

  render() {
    console.log(this.props);

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              {/* <div className="card" style={{ width: "18rem" }}> */}
              {this.props.uploaded ? (
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Product Image Details</h5>
                    <h5 className="card-text">{this.state.imgOriginalName}</h5>
                  </div>
                  <ul class="list-group" style={{ textAlign: "left" }}>
                    <li class="list-group-item">
                      Image id [MongoDB item id]:{this.props.imageData.id}
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
                  <div className="card-body">
                    {/* <a href="" className="card-link">
                      Card link
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a> */}
                  </div>
                </div>
              ) : (
                <div className="card">
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
                  <div className="card-body">
                    {/* <a href="#" className="card-link">
                      Card link
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a> */}
                  </div>
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
                <input
                  ref="file"
                  type="file"
                  className="form-control-file"
                  id="file"
                  onChange={(event) => this.onChangeImgHandler(event)}
                />
                {this.state.imgPreview ? (
                  // <h4>Image Preview</h4>
                  // <img
                  //   className="card-img-top"
                  //   style={{ width: "20%" }}
                  //   src={this.state.imgSrcPreview}
                  //   alt="ProImgPreview"
                  // />

                  <div className="card text-center border-warning">
                    <div className="card-body">
                      <h4>Image Preview</h4>
                      <img
                        className="card-img-top"
                        style={{ width: "20%" }}
                        src={this.state.imgSrcPreview}
                        alt="ProImgPreview"
                      />
                    </div>
                  </div>
                ) : null}

                {/* <img src="..." className="card-img-top" alt="..." /> */}
                {this.props.uploaded ? (
                  <img
                    className="card-img-top"
                    style={{ width: "20%" }}
                    src={this.props.imageSrc}
                    alt="ProductImage"
                  />
                ) : null}
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => this.uploadProductImg()}
                >
                  Upload Image
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <hr />
        <img
          style={{ width: "20%" }}
          src="/image/0248538faeeefd074838d74d23787c12.png"
          alt=""
          
        /> */}
        <h2>Production Text Form</h2>

        <hr />

        <h2>Production Form</h2>
        {/* <form action="/upload" method="POST" encType="multipart/form-data"> */}
        <form action="/upload" method="POST" encType="multipart/form-data">
          <div className="form-row">
            <div className="form-group col-md-6">
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
            </div>
            <div class="form-group col-md-6">
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
            </div>
            <div className="form-group col-md-6">
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
            </div>
            <div className="form-group col-md-6">
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
          <div className="form-group">
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
          </div>
          <div class="form-group">
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

          <input type="submit" value="Submit" className="" />
        </form>
        <hr />

        <button
          className="btn btn-primary btn-block"
          onClick={() => this.uploadProduct()}
        >
          uploadProduct Information
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productForm: state.product.productForm,
    imageData: state.product.imageData,
    imageSrc: state.product.imageSrc,
    loading: state.product.loading,
    uploaded: state.product.uploaded,
    // ings: state.burgerBuilder.ingredients,
    // price: state.burgerBuilder.totalPrice,
    // error: state.burgerBuilder.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onAddProduct: () => dispatch(actions.addProduct()),
    onSetProduct: (productForm) => dispatch(actions.setProduct(productForm)),
    onSetProductImg: (selectedFile) =>
      dispatch(actions.setProductImg(selectedFile)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UIProUploadForm);
