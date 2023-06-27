// this packeg
import React from "react";
import ReactDOM from "react-dom/client";

// import Components
import Navigation from "./components/Navigation";
import Slider from "./components/Slider";
import CarCards from "./components/Cards";
import CarData from "./data/CarData";
// import statics
import './static/index.css';

// Cmponents
function Amiran(){
  return (
    <div>
      <h1>Welcome to my site</h1>
      <Navigation />
      <Slider />
      <div className="cards_main">
        {
          CarData.map((cars) =>{
            return(
              <CarCards cars={cars} />
            )
          })
        }
      </div>
    </div>
  )
}

// Root
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <Amiran/>
)