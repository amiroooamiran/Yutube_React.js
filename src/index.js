// this packeg
import React from "react";
import ReactDOM from "react-dom/client";

// import statics
import './static/index.css';

// omponents
function Amiran(){
  return <h1>Welcome to my site</h1>
}

// Root
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <Amiran/>
)