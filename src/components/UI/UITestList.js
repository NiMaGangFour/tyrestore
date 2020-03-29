import React from "react";
import { Col, Button, Card } from "react-bootstrap";
import "./UIProList.scss";

const UITestList = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div>
      {posts.map(post => (
        <Col key={post.id} xs={2} lg="3" className="col-card">
          <Card className="prod-card">
            {/* <Card.Img variant="top" src={post.thumbnailUrl} /> */}
            <Card.Body>
              <Card.Title>{post.prod_name}</Card.Title>
              <Card.Text>{post.prod_price}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </div>
  );
};

export default UITestList;
