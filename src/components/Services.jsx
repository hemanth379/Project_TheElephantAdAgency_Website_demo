import styled from "styled-components";
import { categories } from "../data";
import ServicesItem from "./ServicesItem";
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection:"column", width:"100%"})}
`;


const Services = () => {
  return (
    <Container>
      {categories.map((item) => (
        <ServicesItem item={item} key={item.id}/>
      ))}
    </Container>
  );
};

export default Services; 