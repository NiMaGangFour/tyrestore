import React from "react";
import { Link } from "react-router-dom";
import { Col, Button, Card } from "react-bootstrap";
import "./UIProList.scss";

const UIProList = ({ prods, loading }) => {
  if (loading) {
    return <h2>Loading....</h2>;
  }

  const imgSrc = (id) => {
    const imageSrc = "/prodsImage/image/" + id;
    return (
      // <Card.Img variant="top" src={imageSrc} style={{ maxWidth: "240px" }} />
      <Card.Img variant="top" src={imageSrc} />
    );
  };
  console.log(prods);
  return (
    <div>
      {prods.map((prod) => (
        <Col key={prod.id} xs={2} lg="3" className="col-card">
          <Card className="prod-card">
            {imgSrc(prod.prod_image_id)}
            <Card.Body>
              <Card.Title className="card-title">{prod.prod_name}</Card.Title>
              <Card.Text>{prod.prod_price} $AUD</Card.Text>
              <Link to={`/tyres/${prod._id}`} className="btn btn-primary">
                Shop
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </div>
  );
};

export default UIProList;
