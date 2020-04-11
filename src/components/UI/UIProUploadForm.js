import React, { Component } from "react";
import "./UIProList.scss";

class UIProUploadForm extends Component {
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
              <input type="text" className="form-control" id="productName" />
            </div>
            <div class="form-group col-md-6">
              <label for="productBrand">Product Brand</label>
              <input type="text" className="form-control" id="productBrand" />
            </div>
            <div className="form-group col-md-6">
              <label for="productPrice">Product Price</label>
              <input type="text" className="form-control" id="productPrice" />
            </div>
            <div className="form-group col-md-6">
              <label for="Status">Status</label>
              <select id="Status" className="form-control">
                <option selected>Available</option>
                <option>Sold Out</option>
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
            />
          </div>
          <div class="form-group">
            <label for="productDetails">Product Details</label>
            <input
              type="text"
              className="form-control"
              id="productDetails"
              placeholder="e.g. 224 35 R17"
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary btn-block"
          />
        </form>
        <button className="btn-primary" onClick={() => this.props.upload()}>
          updload
        </button>
      </div>
    );
  }
}

export default UIProUploadForm;
