import React from "react";
import { Card, CardImg } from "react-bootstrap";
import Rating from "./Rating";

function Product({ product }) {
  console.log(product);
  return (
    <Card className="my-3 py-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color='yellow'
          />
        </Card.Text>
        <Card.Text as="h3">
          <div className="my-3">${product.price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Rating.defaultProps={
  color:'#fe825'
}

export default Product;
