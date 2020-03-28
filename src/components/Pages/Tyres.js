import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";

import "../css/Components.css";
import UIFilter from "../UI/UIFilter";
import UIProList from "../UI/UIProList";
import Pagination from "../UI/Pagination";
function Tyres() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerpage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

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
            </Row>

            <Pagination
              postsPerpage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Tyres;
