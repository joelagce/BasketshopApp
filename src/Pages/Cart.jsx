import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import "./cart.css";
import logo  from "./blue.png";
import veg  from "./veg.png";
import Navbar from "../components/navbar/Navbar";
import { mobile } from "../responsive";
import { addProduct,deleteCart,updateAmountProduct} from "../redux/cartRedux";
import { useDispatch } from "react-redux";


import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";


const KEY = process.env.REACT_APP_STRIPE;


const Cart = () => {
  

  
  
  const [scrollHeight, setScrollHeight] = useState(0);
  const dispatch = useDispatch();
  const cadeleteCart = id => {
    dispatch(deleteCart(id));
  }
  const handleClick = (id,type) => {
    dispatch(updateAmountProduct({id,type}));

  }
  
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);
  const cart = useSelector((state) => state.cart);
  
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart, });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);
  return (
    <div >
      <Navbar isScrolling={scrollHeight} />
     

    
     <div className="contaner">
      <div className="Cart-Container">
      <div className="Heade">
 <h3 className="Heading">Shopping Cart</h3>
 <StripeCheckout className="StripeCheckout"
              name="Basket Shop"
              image="https://m.media-amazon.com/images/I/91FOeSuXvIL._AC_SL1500_.jpg"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
 <button className="checkouts">Checkout</button>
 </StripeCheckout>
 </div>
 {cart.products.map((product) => (
 <div className="Cart-Items">
   
  
   <div className="imgandtitle">
 <div className="image-box">
 <img src={product.img}  />
 </div>
 <div className="abou">
 <h1 className="titl">{product.title}</h1>


 </div>
 </div>
 <div className="price">
 
 
 <div className="counter">
 <div className="btn" onClick={() => handleClick(product._id, true)}>+</div>
 <div className="count">{product.quantity}</div>
 <div className="btn" onClick={() => handleClick(product._id, false)}>-</div>
 </div>
 <div className="prices">
 <div className="amount">$ {product.price * product.quantity}</div>
 
 <div className="remove" onClick={() =>cadeleteCart(product._id)}  ><u>Remove</u></div>
 </div>

 </div>
 
 
 </div>
  ))}
 <hr/> 
 <div className="checkout">
 <div className="total">
 <div>
 <div className="Subtotal">Sub-Total</div>
 
 </div>
 <div className="total-amount" type="total">${cart.total}</div>
 </div>
 <StripeCheckout className="StripeCheckout"
              name="Basket Shop"
              image="https://m.media-amazon.com/images/I/91FOeSuXvIL._AC_SL1500_.jpg"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
 <button className="buttoncheckout">Checkout</button>
 </StripeCheckout>
 </div>
      </div>
 
      </div>
       

     
      <Footer />
    </div>
  );
};

export default Cart;
