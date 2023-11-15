import React from "react";
import { productData } from "./product";
import Button from "react-bootstrap/Button";

const currencyDisplay = Intl.NumberFormat("en-US");

const Price = () => {
  return (
    <div>
      <Button
        variant="primary"
        className="mt-5 text-center"
        style={{
          padding: "5px 20px 5px 20px ",
          fontSize: "20px",
          backgroundColor: "black",
          color: "white", marginInline:"80px",
          marginBottom:"10px"
        }}
      >
        &#8358; {currencyDisplay.format(productData.price)}
      </Button>
    </div>
  );
};

export default Price;
