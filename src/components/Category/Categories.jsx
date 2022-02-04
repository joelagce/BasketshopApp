
import { categories } from "../../data";
import { mobile } from "../../responsive";
import CategoryItem from "./CategoryItem";
import "./style.css"
import { Link } from "react-router-dom";
import styled from "styled-components";


const Categories = () => {
  return (

    
    <div className="container">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
