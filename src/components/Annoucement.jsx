import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
   
   height: 23px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center; 
    font-size: 15px;
    font-weight: 300;
    ${mobile({ fontSize:"10px"})}
`
const Announcement = () => {
  return (
    <Container>
       We are looking forward to work for your next advertising campaign together !!!!
    </Container>
  )
}

export default Announcement