import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Room,
    Twitter
    ,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { Link } from "react-router-dom";

  
  const Container = styled.div`
    display: flex;
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 15px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 15px;
    align-items: center;
  `;

  const Center2 = styled.div`
  flex: 1;
  padding: 15px;
  align-items: center;
  margin-top:55px;
`;
  
  const Title = styled.h3`
    margin-bottom: 25px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;

  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 15px;
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 15px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>STUDIO BELLE</Logo>
          <Desc>
          We provide our consumers with a wide range of the most recent products.
           We've come a long way, so we know just how to provide you with high-quality, low-cost items.
           All of this is provided while maintaining exceptional customer service.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
          </SocialContainer>
        </Left>
          <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem > <Link  to="/" style={{ textDecoration: 'none',color:'black' }}>Home </Link></ListItem> 
            <ListItem> <Link to="/cart" style={{ textDecoration: 'none',color:'black' }}>Cart </Link></ListItem> 
            <ListItem> <Link to="/products/women" style={{ textDecoration: 'none',color:'black' }}>Women </Link></ListItem>
            <ListItem> <Link to="/products/men" style={{ textDecoration: 'none',color:'black' }}>Men </Link></ListItem>
            <ListItem> <Link to="/products/accessories" style={{ textDecoration: 'none',color:'black' }}>Accessories </Link></ListItem>
            <ListItem> <Link to="/products/kids" style={{ textDecoration: 'none',color:'black' }}>Kids </Link></ListItem>
           </List>
           </Center>
           <Center2>
           <List>
            <ListItem> <Link to="products/Necklace" style={{ textDecoration: 'none',color:'black' }}>Necklace </Link></ListItem>
             <ListItem> <Link to="products/Ring" style={{ textDecoration: 'none',color:'black' }}> Ring </Link></ListItem> 
             <ListItem> <Link to="products/Bracelet" style={{ textDecoration: 'none',color:'black' }}>Bracelet </Link> </ListItem> 
          </List>
          </Center2>
        <Right>
          <Title>Contact</Title>
          <ContactItem><Room style={{marginRight:"10px"}}/>W28C+R89, Aurangabad Karachi, Karachi City, Sindh 74600
          </ContactItem>
          <ContactItem><Phone style={{marginRight:"10px"}}/>+92 333 2104643
          </ContactItem>
          <ContactItem><MailOutline style={{marginRight:"10px"}} />studiobelle@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;