import styled from "styled-components";
import Navbar from "../components/navbar/Navbar.js";

import Products from "../components/Products/producto";

import Footer from "../components/footer/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div`
margin-top: 50px;`;


const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      
      <Title>{cat}</Title>
      <FilterContainer>
        
        <Filter>
          <FilterText>Filtrar:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Nuevo</Option>
            <Option value="asc">Precio(asc)</Option>
            <Option value="desc">Precio (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
    
      <Footer />
    </Container>
  );
};

export default ProductList;
