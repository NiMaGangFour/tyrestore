import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";

import "../css/Components.css";
import UIFilter from "../UI/UIFilter";
import UIProList from "../UI/UIProList";
import Pagination from "../UI/Pagination";
import UITestList from "../UI/UITestList";
function Tyres() {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [posts, setPosts] = useState([]);
  const [postsPerPage] = useState(10);

  const [prods, setProds] = useState([]);
  const [prodsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    const fetchProds = async () => {
      setLoading(true);
      const res = await axios.get("/prods");
      console.log(res.data);
      setProds(res.data);
      setLoading(false);
    };

    fetchPosts();
    fetchProds();
  }, []);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Get current posts
  const indexOfLastProd = currentPage * prodsPerPage;
  const indexOfFirstProd = indexOfLastProd - prodsPerPage;
  const currentProds = prods.slice(indexOfFirstProd, indexOfLastProd);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className="switch-component">
      <h1>Tyres Page</h1>{" "}
      <Container>
        <Row>
          <Col style={{ backgroundColor: "green" }} lg="2" sm={3}>
            <UIFilter />
          </Col>
          <Col style={{ backgroundColor: "aqua" }} lg="10" sm={9}>
            <Row>
              {/* <Posts posts={currentPosts} loading={loading} /> */}
              {/* <UIProList />
                <UIProList />
                <UIProList />
                <UIProList />
                <UIProList />*/}
              <UIProList posts={currentPosts} loading={loading} />
              <hr></hr>
              <UITestList posts={currentProds} loading={loading} />
            </Row>

            <Pagination
              postsPerpage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
            <Pagination
              postsPerpage={prodsPerPage}
              totalPosts={prods.length}
              paginate={paginate}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Tyres;
