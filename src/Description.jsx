import React from "react";
import { productData } from "./product";
import Card from "react-bootstrap/Card";

const Description = () => {
  return (
    <div>
      <Card.Text style={{ fontWeight: "300", textAlign: "center" }}>
        {productData.desc}
      </Card.Text>
    </div>
  );
};

export default Description;
