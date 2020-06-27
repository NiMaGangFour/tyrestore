import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import "../css/Components.css";
import UIFilter from "../UI/UIFilter";
import UIProList from "../UI/UIProList";
import Pagination from "../UI/Pagination";

function Tyres() {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [prods, setProds] = useState([]);
  const [prodsTemp, setProdsTemp] = useState([]);
  const [prodsPerPage] = useState(10);

  const [prodImage, setProdImage] = useState([]);

  const [cbValue, setcbValue] = useState({ brandValue: "", priceValie: "" });

  // const [posts, setPosts] = useState([]);
  // const [postsPerPage] = useState(10);
  const fetchProds = async () => {
    setLoading(true);
    console.log("fetchProds >");
    const res = await axios.get("/prods");
    // console.log("/prods", res.data);
    setProds(res.data);
    setProdsTemp(res.data);
    setLoading(false);
  };

  const fetchProdImage = async () => {
    setLoading(true);
    const res = await axios.get("/prodsImage/images");
    // console.log("/prodsImage/images", res.data);
    setProdImage(res.data);
    setLoading(false);
  };

  useEffect(() => {
    // const fetchPosts = async () => {
    //   setLoading(true);
    //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    //   setPosts(res.data);
    //   setLoading(false);
    // };

    fetchProds();
    fetchProdImage();
  }, []);

  const searchHandler = (brand, price) => {
    // console.log("searchHandler()  brand >>>", brand);
    // console.log("searchHandler()  price >>>", price);
    // console.log("searchHandler()  prods >>>", prods);
    setcbValue({ brandValue: brand, priceValue: price });
  };

  useEffect(() => {
    // console.log("filterProds()  cbValue >>>", cbValue);
    // console.log("filterProds()  prods >>>", prods);
    // console.log("filterProds()  cbValue.brandValue >>>", cbValue.brandValue);

    let fileredProdsByBrand = prods.filter((prod) => {
      return prod.prod_brand.indexOf(cbValue.brandValue) !== -1;
    });
    let fileredProdsByPrice = fileredProdsByBrand.filter((prod) => {
      // let priceRange = [200,250];
      // if(cbValue.priceValue === "$200 - $250")
      console.log("prod.prod_price >>>", prod.prod_price);
      if (cbValue.priceValue === "$200 - $250") {
        return 200 <= prod.prod_price && prod.prod_price <= 250;
      } else if (cbValue.priceValue === "$250 - $300") {
        return 250 <= prod.prod_price && prod.prod_price <= 300;
      } else if (cbValue.priceValue === "$300 - $350") {
        return 300 <= prod.prod_price && prod.prod_price <= 350;
      } else if (cbValue.priceValue === "$350 - $500") {
        return 350 <= prod.prod_price && prod.prod_price <= 500;
      } else {
        return prod.prod_price >= 0;
      }
    });

    console.log("filterProds()  fileredProdsByPrice >>>", fileredProdsByPrice);
    setProdsTemp(fileredProdsByPrice);
    console.log("filterProds()  Prods >>>", prods);
  }, [cbValue]);

  //Get current produts
  const indexOfLastProd = currentPage * prodsPerPage;
  const indexOfFirstProd = indexOfLastProd - prodsPerPage;
  const currentProds = prodsTemp.slice(indexOfFirstProd, indexOfLastProd);

  //JavaScript Array concat() Method
  // const prodSets = prods.concat(prodImage);
  // console.log(prodSets);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="switch-component">
      <h1>Tyres Page</h1>{" "}
      <Container>
        <Row>
          <Col style={{ backgroundColor: "green" }} lg="2" sm={3}>
            <UIFilter searchHandler={searchHandler} />
          </Col>
          <Col style={{ backgroundColor: "aqua" }} lg="10" sm={9}>
            <Row>
              {/* <Posts posts={currentPosts} loading={loading} /> */}
              {/* <UIProList />
                <UIProList />
                <UIProList />
                <UIProList />
                <UIProList />*/}
              <UIProList prods={currentProds} loading={loading} />
              <hr />
              {/* <UITestList posts={currentProds} loading={loading} /> */}
            </Row>
            <Pagination
              postsPerpage={prodsPerPage}
              totalPosts={prods.length}
              paginate={paginate}
            />
            {/* <Pagination
              postsPerpage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
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
    imageDeleting: state.product.imageDeleting,
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

export default connect(mapStateToProps, mapDispatchToProps)(Tyres);
