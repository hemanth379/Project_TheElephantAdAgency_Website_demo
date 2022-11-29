import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from "react";
import styled from "styled-components"
import { MsliderItems } from "../data"
import { mobile } from "../responsive";

const Container = styled.div`
    margin-top: 10px;
    width: 100%;
    height: 60vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ width:"100%",height:"60vh"})}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center; 
    position: absolute;  
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px" };
    right: ${props=> props.direction === "right" && "10px" };
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    ${mobile({width: "30px", height: "30px"})}
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease ;
    transform:translateX(${(props) => props.slideIndex * -100}vw);
   
`;

const Slide = styled.div`
    width: 100vw;
    height: 100wh;  
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
    
`;
const ImgCont = styled.div`
    height: 100%;
    flex: 1;
    ${mobile({ display:"none"})}
`;
const Img = styled.img`
    height: 100%; 
    width: 80%;
    padding-left: 90px;
`;


const InfoCont = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px ;
    color: #161716;
    ${mobile({ fontSize: "30px"})}
`;

const Desc = styled.p`
    margin: 50px 0px; 
    font-size: 20px;
    font-weight: 500px;
    letter-spacing: 3px;
`;




const Oslider = () => {
    const [slideIndex, setSlideIndex] = useState(0); 
    const handleClick = (Direction)=>{
      if (Direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
    }; 

  return (
    <Container>
        <Arrow direction ="left" onClick={()=>handleClick("left")} >
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {MsliderItems.map((item) =>(
            <Slide bg={item.bg} key={item.id}>

            <InfoCont>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            
            </InfoCont>
            <ImgCont>
            <Img src= {item.img}/> 
            </ImgCont>

            </Slide>
          ))}
        </Wrapper>


        <Arrow direction ="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Oslider