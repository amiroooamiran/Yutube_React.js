// this packeg
import React from "react";
import ReactDOM from "react-dom/client";

// import Components
import Navigation from "./components/Navigation";
import Slider from "./components/Slider";

// import statics
import './static/index.css';

// Cmponents
function Amiran(){
  return (
    <div>
      <h1>Welcome to my site</h1>
      <Navigation />
      <Slider />
    </div>
  )
}

// Root
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <Amiran/>
)