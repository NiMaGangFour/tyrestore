import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import "./UIFilter.scss";

class UIFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: null,
      price: null,
    };
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  searchHandler(brand, price) {
    this.props.togglePopUp(brand, price);
  }

  render() {
    console.log("UIFilter: this.props >>>", this.props);

    return (
      <div>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <h3 className="h3">FILTER</h3>
          <Form.Label>
            <h4>Brand</h4>
          </Form.Label>
          <Form.Control
            className="cont-select"
            as="select"
            name="brand"
            value={this.state.brand}
            onChange={(event) => this.changeHandler(event)}
          >
            <option>All</option>
            <option>Brand A</option>
            <option>Brand B</option>
            <option>Brand C</option>
          </Form.Control>
          <Form.Label>
            <h4>Price</h4>
          </Form.Label>
          <Form.Control
            as="select"
            name="price"
            value={this.state.price}
            onChange={(event) => this.changeHandler(event)}
          >
            <option>All</option>
            <option>$200 - $250</option>
            <option>$250 - $300</option>
            <option>$300 - $350</option>
            <option>$350 - $500</option>
          </Form.Control>
          <Button
            className="btn-search"
            onClick={() =>
              this.searchHandler(this.state.brand, this.state.price)
            }
          >
            Refine Search
          </Button>
          <Button className="btn-clear">Clear all</Button>
        </Form.Group>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productForm: state.product.productForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onAddProduct: () => dispatch(actions.addProduct()),
    onSetProduct: (productForm) => dispatch(actions.setProduct(productForm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UIFilter);
