import React from "react";
import "./Navbar.css";
import { FaInstagram, FaFacebook,FaTiktok,FaTwitter, FaUser, FaCaretDown, FaCartArrowDown} from 'react-icons/fa';
import logo from "./shoes.png"
import menu from "./menu.jpg";
import { ShoppingCart, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { categories } from "../../data";




const Navbar = ({ isScrolling }) => {
  
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0,  behavior: "smooth" });
  };
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
    
    
      <div className="Logo">
      <Link className="link" to="/">
      <div>
      
       <img src={logo}  />
       
       <h2 className="name">ShoesStore</h2>

       </div>
      </Link>
    
      <ul className="socialapp">
        <li><a href><FaFacebook/></a></li>
        <li><a href><FaInstagram/></a></li>
        <li><a href><FaTiktok/></a></li>
        <li><a href><FaTwitter/></a></li>

      </ul>
      
       
      <div>
       
       <h2>(555)666666</h2>
       </div>

       </div>
      <div className="menus">
      

      <ul className="nav-links">
      
        <li>
        <Link className="link" to="/">
          <a href >Home</a>
          </Link>
          </li>

      
        
        <li><a href>Contact</a></li>

      </ul>

      <div className="options">
        
        
        
        <Link to="/cart">
         
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCart className="user" />
            </Badge>
        
          </Link>
        </div>
      </div>
     
      
        
     
    </nav>
    
  );
};

export default Navbar;
