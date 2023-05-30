// this packeg
import React from "react";
import ReactDOM from "react-dom/client";

// import Components
import Navigation from "./components/Navigation";

// import statics
import './static/index.css';

// Cmponents
function Amiran(){
  return (
    <div>
      <h1>Welcome to my site</h1>
      <Navigation />
    </div>
  )
}

// Root
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <Amiran/>
)