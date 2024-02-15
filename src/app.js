import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import Header from "./Header";

const Applayout=()=>{
  return (<div>
    <Header></Header>
    <Body></Body>
  </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout></Applayout>);
