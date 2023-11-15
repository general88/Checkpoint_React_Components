import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Img from "./Img";
import ProductName from "./ProductName";
import Description from "./Description";
import Price from "./Price";
import Card from "react-bootstrap/Card";
import Correct from "../public/images/correct.png";

let firstName = prompt("Please enter your name");

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Card
          style={{
            width: "18rem",
            border: "1px solid black",
            borderRadius: "10px",
            boxSizing: "border-box",
            margin: "auto",
          }}
        >
          <Img />
          <Card.Body>
            <ProductName />
            <Description />
            <Price />
          </Card.Body>
        </Card>
        <div style={{ margin: "auto" }}>
          <h1 style={{ fontSize: "20px" }}>
            Hello {firstName ? firstName : "There"}! You Are Welcome{" "}
          </h1>

          {firstName && (
            <div>
              <img
                src={Correct}
                alt=""
                placeholder="Correct"
                style={{ width: "170px" }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
