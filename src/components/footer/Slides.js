import React from "react";
import "./Footer.css";
import img1 from './descarga.png';
import img2 from './rojo.jpg';
import img3 from './1.jpg';

const slidesInfo = [
  {
    src:
      "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
    alt: "Project 1",
    desc: "Project 1",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "Project 2",
    desc: "Project 2",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Project 3",
    desc: "Project 3",
  },
  
];

const slides = slidesInfo.map((slide) => (
  
    
    <div class="container">
   
            <div class="card">
              
             <div class=" imgBx">
               <img src={slide.src}/>
               </div> 
               <div class="contentBx">
                   <h2>{slide.desc}</h2>
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
                <img src={img1}/>
                <img src={img2}/>
                <img src={img3}/>
                
                
         
        </div>
        
            <a href>Comprar ahora</a>
               </div>
               </div> 
         
                  </div>
   

));

export default slides;
