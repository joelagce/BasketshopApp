import React, { useState, useEffect } from "react";

import Cover from "../components/cover/Cover";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import Products from "../components/Products/producto";
import Info from "../components/info/Info";

import "./Home.css";
import Footer from "../components/footer/Footer";
import Categories from "../../src/components/Category/Categories";

function Home() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <Categories />
      <h2 className="tenis">Featured articles</h2>
      <Products/>
      <Info />
      
     
      <Footer/>

    </div>
  );
}

export default Home;
