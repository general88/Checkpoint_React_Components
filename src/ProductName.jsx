import React from "react";
import { productData } from "./product";
import Card from "react-bootstrap/Card";

const ProductName = () => {
  //   let { name, price, img, desc } = productData;
  return (
    <div>
      <Card.Title
        style={{
          fontWeight: "900",
          textDecoration: "underline",
        }}
      >
        {productData.name}
      </Card.Title>
    </div>
  );
};

export default ProductName;
