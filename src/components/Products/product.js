
  import { Link } from "react-router-dom";
 
  import "./product.css"

import React from "react";
import { Button } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
  const Product = ({ item }) => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();
  
    useEffect(() => {
      const getProduct = async () => {
        try {
          const res = await publicRequest.get("/products/find/" + item._id);
          setProduct(res.data);
        } catch {}
      };
      getProduct();
    }, [id]);
  
    const handleQuantity = (type) => {
      if (type === "dec") {
        quantity > 1 && setQuantity(quantity - 1);
      } else {
        setQuantity(quantity + 1);
      }
    };
  
    const handleClick = () => {
      dispatch(
        addProduct({ ...product, quantity, color, size })
      );
    };
   
    return (
      <React.Fragment>
       
      <div class="contaner">
      
              <div class="card">
                
               <div class=" imgBx">
                 <img src={item.img}/>
                 </div> 
                 <div class="contentBx">
                     <h2>{item.title}</h2>
                 
                 <div class="consola">
                  <Button onClick={handleClick}>
                    <span>Añadir a carrito</span>
                  </Button>
                  <Link to={`/product/${item._id}`} className="button">
                  <Button>
                 
                    <span>Ver</span>
                  </Button>
                  </Link>
                  
                  
           
          </div>
         
              
              
                 </div>
                 </div> 
                
                    </div>
                  
                    </React.Fragment>
      
    );
  };
  
  export default Product;
  