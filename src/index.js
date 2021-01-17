import React from "react";
import ReactDOM from "react-dom";
const fname = "SHEER";
const lname = "ANGEL";
const num = 0;
ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`}!</h1>
    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
