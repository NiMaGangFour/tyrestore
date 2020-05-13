import React, { Component } from "react";

class UIProConfirmation extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
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
                    placeholder={this.props.productForm.productName}
                    // onChange={(event) => this.changeHandler(event)}
                    // onChange={(event) => this.handleChangeProductName(event)}
                  />

                  <label for="productBrand">Product Brand</label>
                  <input
                    name="productBrand"
                    type="text"
                    className="form-control"
                    id="productBrand"
                    placeholder={this.props.productForm.productBrand}
                  />

                  <label for="productPrice">Product Price</label>
                  <input
                    name="productPrice"
                    type="text"
                    className="form-control"
                    id="productPrice"
                    placeholder={this.props.productForm.productPrice}
                  />

                  <label for="Status">Status</label>
                  <input
                    name="productStatus"
                    id="productStatus"
                    className="form-control"
                    placeholder={this.props.productForm.productStatus}
                  />
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
                    placeholder={this.props.productForm.productInformation}
                  />
                  <label for="productDetails">Product Details</label>
                  <input
                    name="productDetails"
                    type="text"
                    className="form-control"
                    id="productDetails"
                    placeholder={this.props.productForm.productDetails}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card text-center">
            <div className="card-body">
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
                    // placeholder={this.props.imageData.id}
                    disabled
                  />
                </div>
              </div>

              <button
                className="btn btn-primary btn-block"
                //   onClick={() => this.uploadProduct()}
              >
                Upload Product Information
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UIProConfirmation;
