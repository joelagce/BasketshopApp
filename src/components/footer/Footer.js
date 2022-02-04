import React from "react";
import "./Footer.css";
import Carousel from "@brainhubeu/react-carousel";
import { Link } from "react-router-dom";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import Slider  from "../slider/Slider";
import Products from "../Products/product";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  ArrowDropUpRounded,
  ArrowRightAltTwoTone
} from "@material-ui/icons";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="grid-4">
          <div class="grid-4-col footer-about">
            <h3 class="title-sm">About</h3>
            <p class="text">
            We are a leading company in the basketball sector with the best products to take your game to the next level.
            </p>
          </div>

          <div class="grid-4-col footer-links">
            <h3 class="title-sm">Categories</h3>
            <ul>
              <li>
                <Link to="products/balon">
                <a href="#services">Balls</a>
                </Link>
              </li>
              <li>
              <Link to="products/ropa">
                <a href="#portfolio">Clothes</a>
                </Link>
              </li>
              <li>
              <Link to="products/calcetines">
                <a href="#about">Socks</a>
                </Link>
              </li>
              <li>
              <Link to="products/tenis">
                <a href="#testimonials">Sneakers</a>
              </Link>
              </li>
             
            </ul>
          </div>

          <div class="grid-4-col footer-links">
            <h3 class="title-sm">Pages</h3>
            <ul>
              <li>
              <Link to="/cart">
                <a href="#">Cart</a>
                </Link>
              </li>
              <li>
              <Link to="/">
                <a href="#">Home</a>
                </Link>
              </li>
              
            </ul>
          </div>

          <div class="grid-4-col footer-newstletter">
            <h3 class="title-sm">Subscribe</h3>
            <p class="text">
            subscribe to get the best promotions in the basketball sector
            </p>
            <div class="footer-input-wrap">
              <input type="email" class="footer-input" placeholder="Email" />
              <a href="#" class="input-arrow">
                <ArrowRightAltTwoTone/>
              </a>
            </div>
          </div>
        </div>

        <div class="bottom-footer">
          <div class="copyright">
            <p class="text">
              Copyright&copy;2022 All rights reserved | Made by
              <span> Joel Agundez</span>
            </p>
          </div>

         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
