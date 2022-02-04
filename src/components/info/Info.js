import React from "react";
import "./Info.css";
import NBA from './basket.jpg'
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="info-container">
      <div className="info">
        
        <div className="title">
        <h1>Find all products at the best price</h1>
        <div className="boton">
        <Link className="link" to="products/tenis">
        <button className="botones" >Go to buy</button>
        </Link>
        </div>
        </div>
        <img src={NBA}></img>
      </div>
      
    </div>
  );
};

export default Info;
