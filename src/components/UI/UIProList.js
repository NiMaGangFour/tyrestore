import React from "react";
import { Col, Button, Card } from "react-bootstrap";
import "./UIProList.scss";

const UIProList = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div>
      {posts.map((post) => (
        <Col key={post.id} xs={2} lg="3" className="col-card">
          <Card className="prod-card">
            {/* <Card.Img variant="top" src={post.thumbnailUrl} /> */}
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </div>
  );
};

export default UIProList;
