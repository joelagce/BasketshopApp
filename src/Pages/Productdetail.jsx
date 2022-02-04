

import "./Productdetail.css"
import logo from "./logo.png"
import blue from "./blue.png"
import { Share } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
 

  

  
  return (
    <div className="containe">
         <div className="car">
           <div className="shoeBackgroun">
             <div className="gradient">
               <div className="gradien second" color="blue"></div>
               <h1 class="nik">Adidas</h1>
               <img src={logo} alt="" className="log"/>
                <a href="#" className="shar"><Share></Share></a>

                <img src={blue} alt="" className="sho show" color="blue"/>
                
             </div>
            
           </div>
           <div className="inf">
                <div className="shoeNam">
                    <div>
                        <h1 className="bi">Nike Zoom KD 12</h1>
        
                    </div>
                    <h3 className="smal">Men's running shoes</h3>
                </div>
                <div className="descriptio">
                    <h3 className="titl">Product Info</h3>
                    <p className="tex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                </div>
                
                <div className="size-containe">
                    <h3 className="titl">size</h3>
                    <div className="size">
                        <span className="siz">7</span>
                        <span className="siz">8</span>
                        <span className="siz activ">9</span>
                        <span className="siz">10</span>
                        <span className="siz">11</span>
                    </div>
                </div>
                <div class="buy-pric">
                    <a href="#" className="bu"><i className="fas fa-shopping-cart"></i>Add to card</a>
                    <div className="price">
                        <i className="fas fa-dollar-sign"></i>
                        <h1>189.99</h1>
                    </div>
                </div>
            </div>
         </div>
         
       </div>
     
  );
};

export default ProductDetail;
