import React from "react";
import "./Cover.css";
import coverVideo from "../../media/basket.mp4";
import { Link } from "react-router-dom";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Basket Shop</h1>
      <p>your best partner in sports</p>
      <Link className="link" to="products/tenis">
      <button className="boton">go to buy</button>
      </Link>
    </div>
  );
};

export default Cover;
