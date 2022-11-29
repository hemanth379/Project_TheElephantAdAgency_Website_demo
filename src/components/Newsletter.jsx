import { Send } from '@material-ui/icons'
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    height: 40vh;
    background-color: whitesmoke;
     display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    color: green;
    ${mobile({ fontSize:"50px", marginBotton:"10px"})}
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ fontSize:"20px", marginBottom:"20px"})}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border : 1px solid lightgray ;
    
    ${mobile({marginRight:"15px"})}

   
` 
const Input = styled.input`
    height: 40px;
    border: none;
    flex: 8;
    padding-left: 20px;
    font-size: 15px;
    background-color: white;
    margin-bottom: 15px;
    
    
    ${mobile({ fontSize:"13px"})}
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: green;
    color: white;
`


const Newsletter = () => {
  return (
    <Container> 
        <Title>Newsletter </Title>
        <Desc>Get timely updates from our Agency</Desc> 
        <InputContainer>
            <Input placeholder="Your email" />
            <Button>
                <Send/> 
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter