import styled from "styled-components";
import { Mcategories } from "../data";
import ServicesItem from "./ServicesItem";
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection:"column", width:"100%"})}
`;


const Mservices = () => {
  return (
    <Container>
      {Mcategories.map((item) => (
        <ServicesItem item={item} key={item.id}/>
      ))}
    </Container>
  );
};

export default Mservices; 