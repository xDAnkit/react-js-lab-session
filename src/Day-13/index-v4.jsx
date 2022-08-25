import React from "react";
import ReactDOM from "react-dom";

let demo = React.createElement(
  "h1",
  { style: { color: "green" } },
  "Welcome to GeeksforGeeks"
);
const Day13V4 = () => {
  console.log(demo);
  return (
    <>
      {demo}
      <p>Hello</p>
    </>
  );
};

export default Day13V4;
