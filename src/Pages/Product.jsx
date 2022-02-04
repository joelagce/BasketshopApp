import { Add, Details, Remove } from "@material-ui/icons";
import styled from "styled-components";
import "./Productdetail.css"
import logo from "./logo.png"
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar.js";
import { Share } from "@material-ui/icons";
import { mobile } from "../responsive";
import  ProductDetail  from "./Productdetail.jsx";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  margin-top: 150px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100vh;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  font-weight: 700;
  border-radius: 30px;
  border: 1px solid black;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
 
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {

  const dispatch = useDispatch();
  
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
 

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
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
    <Container>
      
      <Navbar />
      <div className="containe">
        <div className="car">
            <div className="shoeBackgroun">
                <div className="gradient">
                    <div className="gradien second" color="blue"></div>
     
                </div>
                <h1 className="nik">{product.color}</h1>
                <img src="img/logo.png" alt="" className="log"/>
                <a href="#" className="shar"><Share></Share></a>

               
                <img src={product.img} alt="" className="sho show" color="blue"/>
                
            </div>
            <div className="inf">
                <div className="shoeNam">
                    <div>
                        <h1 className="bi">{product.title}</h1>
         
                    </div>
                    <h3 className="smal">{product.categories}</h3>
                </div>
                <div className="descriptio">
                    <h3 className="titl">Product Info</h3>
                    <p className="tex">{product.desc}</p>
                </div>
                
                <div className="size-containe">
                <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
           
          </AddContainer>
                </div>
                <div className="buy-pric">
                    <a href="#" onClick={handleClick} className="bu"><i class="fas fa-shopping-cart"></i>Add to card</a>
                    <div className="pric">
                        <i class="fas fa-dollar-sign"></i>
                        <h1>${product.price}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
     
      
      <Footer />
    </Container>
    
  );
};

export default Product;
