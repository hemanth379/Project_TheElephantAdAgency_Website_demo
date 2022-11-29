import { Facebook, Instagram, MailOutline, Room, Twitter, Phone, LinkedIn } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive";
import {Link} from 'react-router-dom'

const Container = styled.div`
    height: 30vh;
    display: flex;
    background-color: #161716;
    ${mobile({ flexDirection:"column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;   
    ${mobile({ flex:"1"})}
`
const Imaged = styled.img`
    width: 30%;
    height: 30%;
    ${mobile({ width: "50%", height: "50%"})}
`

const Desc = styled.p`
    margin: 20px 0px;
    color: white;   
    ${mobile({ fontSize:"15px"})}
`
const SocialContainer = styled.div`
    display: flex;   

`
 const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${mobile({width: "35px", height: "35px"})}
 `
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display:"none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
    color: white;  
    ${mobile({ fontSize:"25px" })}
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    color: white;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;  
    ${mobile({backgroundColor: "black" })}
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: white; 
  ${mobile({fontSize:"13px" })}
`;

const Footer = () => {
  return (
    <Container>        
        <Left>
            <Imaged src="http://www.elephantadagency.com/images/logo.png"/>
            
            <Desc>Send us your contact form, or feel free to give us a call. We look forward to working you on your next advertising campaign together</Desc>
            <SocialContainer>
          <SocialIcon color="3B5999">
                <Facebook/>
          </SocialIcon>
          <SocialIcon color="E4405F">
                <Instagram/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
                <Twitter/>
          </SocialIcon>
          <SocialIcon color="0072B1">
                 <LinkedIn/>
          </SocialIcon>
            </SocialContainer>
        </Left>
        
        <Center>
            <Title>Useful Links</Title>
            <List>
            <ListItem><Link to="/" style={{textDecoration:"none", color:"white"}}>Home</Link></ListItem>
                <ListItem><Link to="/ourservicespage" style={{textDecoration:"none", color:"white"}}>Our Services</Link></ListItem>
                <ListItem><Link to="/aboutuspage" style={{textDecoration:"none", color:"white"}}>About Us</Link></ListItem>
                <ListItem>Blog</ListItem>
                <ListItem>Register</ListItem>
                <ListItem><Link to="/contactpage" style={{textDecoration:"none", color:"white"}}>Contact Us</Link></ListItem>      
            </List>
        </Center>
        
        <Right>
        <Title> Contact</Title>
        <ContactItem> <Room style={{marginRight:"10px"}}/>
        D No. 1-90/7/B/121, F No. F1, Innovative Cyberview Apts, Patrika Nagar, Madhapur, Hyderabad – 500081
        </ContactItem>
        <ContactItem> <Phone style={{marginRight:"10px"}}/>
        +91 8008783823, +91 8008770440
        </ContactItem>
        <ContactItem> <MailOutline style={{marginRight:"10px"}}/>
        info@elephantadagency.com
        </ContactItem>
        </Right> 
    </Container>
  )
}

export default Footer