import React from "react";
import "./About.css";
import img1 from './tenis.jpeg'
import img2 from './playeras.jpg'
import img3 from './balon.jpg'
import img4 from './accesorios.jpg'

const About = () => {
  return (
    <div className="about-container">
      <h1>Que quieres comprar?</h1>
      <div className="categories">
        
        <div className="categorie">
        <img src={img1}/>
        <h1>Tenis</h1>
        </div>
        <div className="categorie">
            <img src={img2}/>
            <h1>Ropa</h1>

          </div>
          <div className="categorie">
            <img src={img3}/>
            <h1>Balones</h1>
           
          
          </div>
          <div className="categorie">
            <img src={img4}/>
            <h1>Accesorios</h1>
           
             
           
            
           
          
          </div>
      </div>
    </div>
  );
};

export default About;
