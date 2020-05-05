import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import axios, { post } from "axios";

import "./UIProList.scss";

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
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps is : " + nextProps.productForm);
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  changeImgHandler(event) {
    this.setState({ file: event.target.value });
  }

  async onSubmitImgHandler() {
    const res = await axios.post("/upload");
    console.warn("get response", res);
    // this.setState({ response: res.data });
  }

  uploadProduct() {
    const productForm = {
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

  onChangeImgHandler = (event) => {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
    // let files = event.target.files;
    // let reader = new FileReader();
    // reader.readAsDataURL(files[0]);

    // reader.onload = (event) => {
    //   console.warn("data file", event.target.result);
    //   const formData = { file: event.target.result };
    //   return post("/upload", formData).then((response) =>
    //     console.warn("result", response)
    //   );
    // };
  };

  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios
      .post("/upload", data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.log(res.statusText);
        console.log(res);
      });
  };

  render() {
    console.log(this.props);

    return (
      <div>
        {/* <hr />
        <img
          style={{ width: "20%" }}
          src="/image/0248538faeeefd074838d74d23787c12.png"
          alt=""
        /> */}

        <form action="/upload" method="POST" encType="multipart/form-data">
          {/* <form
          onSubmit={this.onSubmitImgHandler}
          methid="POST"
          encType="multipart/form-data"
        > */}
          <hr />
          <h2>Production Image Update</h2>
          <div className="custom-file mb-3">
            {/* <input
              value={this.state.file}
              // onChange={(event) => this.handleChangeProductName(event)}
              type="file"
              name="file"
              id="file"
              className="custom-file-input"
            /> */}
            <label for="title" class="custom-file-label">
              Choose File
            </label>
          </div>
          <h2>Production Text Form</h2>
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

          <input
            type="submit"
            value="Submit"
            className="btn btn-primary btn-block"
          />
        </form>

        <button
          className="btn-primary"
          //   onClick={() => this.props.onAddProduct()}
          onClick={() => this.uploadProduct()}
        >
          uploadProduct
        </button>
        {/* <button
          className="btn-danger"
          //   onClick={() => this.props.onAddProduct()}
          onClick={() => this.uploadProductImg()}
        >
          updload
        </button> */}

        <div>
          <h1>React js File Updload Toturial</h1>
          <input
            type="file"
            name="file"
            onChange={(event) => this.onChangeImgHandler(event)}
          />
          <button className="btn-danger" onClick={() => this.onClickHandler()}>
            Upload
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productForm: state.product.productForm,
    // ings: state.burgerBuilder.ingredients,
    // price: state.burgerBuilder.totalPrice,
    // error: state.burgerBuilder.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onAddProduct: () => dispatch(actions.addProduct()),
    onSetProduct: (productForm) => dispatch(actions.setProduct(productForm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UIProUploadForm);
