import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
import {Link} from 'react-router-dom'

const Container =  styled.div`
    height: 60px;
    background-color: green;
    ${mobile({ height: "42px", width:"100%"})}

    
`
const Wrapper = styled.div`
    padding: 15px 20px;
    display: flex;
    ${mobile({ padding: "10px 5px" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 10px;
    ${mobile({ flex: 1})}
`
const Logo = styled.h1`
    font-weight: bold;
    color: white;
    font-size: 25px;
    cursor: pointer;
    ${mobile({ fontSize: "11px" })}
`;

const Right = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 10px;
    ${mobile({ flex: 1, justifyContent:"center"})}
`
const MenuItem = styled.div`
    font-size: 20px;
    color: white;
     
    margin-left: 25px; 
    font-weight: 300;
    ${mobile({ fontSize: "9px",fontWeight: 400})}
`;
const Navbar = () => {
  return (
    <Container>
    <Wrapper> 
    <Left>
    <Link to="/" style={{textDecoration:"none", color:"black"}}><Logo>THE ELEPHANT AD AGENCY</Logo></Link>
    </Left>
    
    <Right>
    <Link to="/ourservicespage" style={{textDecoration:"none", color:"black"}}><MenuItem>OUR SERVICES</MenuItem></Link>
    <Link to="/aboutuspage" style={{textDecoration:"none", color:"black"}}><MenuItem>ABOUT US</MenuItem></Link>
    <Link to="/blogpage" style={{textDecoration:"none", color:"black"}}><MenuItem>BLOG</MenuItem></Link>
    <Link to="/contactpage" style={{textDecoration:"none", color:"black"}}><MenuItem>CONTACT US</MenuItem></Link>
    </Right>
    </Wrapper>
    </Container>
  )
} 

export default Navbar