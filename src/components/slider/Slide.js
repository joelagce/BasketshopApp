import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "../Products/product";
import "./slider.css";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>My Projects</h2>
      </div>

      <Carousel
        arrows
        slidesPerPage={3}
        infinite
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={400}
        
        customPaging={() => {
          return (
            <div class="contaner">
     
              <div class="card">
                
               <div class=" imgBx">
                 <img src/>
                 </div> 
                 <div class="contentBx">
                     <h2></h2>
                 <div class="cantidad">
                     <h3>Cantidad</h3>
                     <span>1</span>
                     <span>2</span>
                     <span>3</span>
                     <span>4</span>
                     <span>5</span>
                 </div>
                 <div class="consola">
                  <h3>Consola</h3>
                  <img src/>
                  <img src/>
                  <img src/>
                  
                  
           
          </div>
          
              <a href>Comprar ahora</a>
              
                 </div>
                 </div> 
           
                    </div>
          );
        }}
        breakpoints={{
          960: {
            slidesPerPage: 1,
            arrows: false,
            itemWidth: 250,
          },
        }}
      />
    </div>
  );
};

export default Slider;