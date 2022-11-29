import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    height: 30px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center; 
    font-size: 15px;
    font-weight: 300;
    ${mobile({ fontSize:"10px", display:"none"})}
`
const Copyright = () => {
  return (
    <Container>
       Copyright ©2022 The Elephant Ad Agency. All Rights Reserved
    </Container>
  )
}

export default Copyright