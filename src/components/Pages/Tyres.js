import React, { useState, useEffect, useCallback } from "react";
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
  const [prodsPerPage] = useState(10);

  const [prodImage, setProdImage] = useState([]);

  const [cbValue, setcbValue] = useState({ brandValue: "", priceValie: "" });

  // const [posts, setPosts] = useState([]);
  // const [postsPerPage] = useState(10);

  useEffect(() => {
    // const fetchPosts = async () => {
    //   setLoading(true);
    //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    //   setPosts(res.data);
    //   setLoading(false);
    // };

    const fetchProds = async () => {
      setLoading(true);
      const res = await axios.get("/prods");
      console.log("/prods", res.data);
      setProds(res.data);
      setLoading(false);
    };

    const fetchProdImage = async () => {
      setLoading(true);
      const res = await axios.get("/prodsImage/images");
      console.log("/prodsImage/images", res.data);
      setProdImage(res.data);
      setLoading(false);
    };

    fetchProds();
    fetchProdImage();
  }, []);

  const [popup, setPopup] = useState(false);
  const togglePopUp = useCallback(
    (brand, price) => {
      // setPopup(!popup);
      setcbValue({ brandValue: brand, priceValue: price }, filterProds());
    },
    [cbValue]
  );
  console.log(cbValue);

  const filterProds = () => {
    console.log("f: filterProds  prods >>>", prods);
    console.log("cbValue.brandValue >>>", cbValue.brandValue);
    let fileredProds = prods.filter((prod) => {
      return prod.prod_brand.indexOf(cbValue.brandValue) !== -1;
    });
    console.log("fileredProds >>>", fileredProds);
  };

  //Get current produts
  const indexOfLastProd = currentPage * prodsPerPage;
  const indexOfFirstProd = indexOfLastProd - prodsPerPage;
  const currentProds = prods.slice(indexOfFirstProd, indexOfLastProd);
  console.log("prods", prods);
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
            <UIFilter popup={popup} togglePopUp={togglePopUp} />
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
