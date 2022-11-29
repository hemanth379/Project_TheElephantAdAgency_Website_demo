import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from '../responsive';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative; 
    
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "30vh"})}
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
  
`;
const Title = styled.h1`
    color: whitesmoke;
    margin-bottom: 20px;
    font-size: 30px;
    ${mobile({ fontSize: "25px"})}
`;



 
const MservicesItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src= {item.img}/>
      <Info>
        <Title>{item.title}</Title> 
        
      </Info>
      </Link>
    </Container>
  );
};

export default MservicesItem;