import React from 'react'
import styled from "styled-components";
import { mobile } from '../responsive';

const Logo = styled.h1`
  height: 40px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center; 
  font-size: 50px;
  font-weight: bold;
  margin-top: 15px;
  ${mobile({ fontSize:"20px", padding:"7px", width:"100%"})}
  
`;

const HCategory = () => {
  return (
    <div>
      <Logo>OUR SERVICES</Logo>
    </div>
  )
}

export default HCategory