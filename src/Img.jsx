import React from "react";
import { productData } from "./product";
import Card from "react-bootstrap/Card";

const Img = () => {
  return (
    <div>
      <Card.Img
        style={{ width: "18rem", borderRadius: "10px" }}
        variant="top"
        src={productData.img}
      />
    </div>
  );
};

export default Img;
