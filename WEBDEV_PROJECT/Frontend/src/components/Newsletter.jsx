import { SendOutlined } from "@material-ui/icons"
import styled from "styled-components"
import emailjs from "emailjs-com"

const Container = styled.div`
    height: 60vh;
    color: white;
    background-color: gold;
    display: flex;
    align-items: center;
    justify-content: center;    
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 75px;
    margin-bottom: 20px;
`

const Desc = styled.div`
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 20px;    
`

const Input = styled.input`
    border: none;
    margin: 10px;
    flex: 8;
    padding-left: 20px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: black;
    color: white;
    border-radius: 20px;
    cursor: pointer;
`

const InputContainer = styled.div`
    width: 100%;
    height: 40px;
    background-color: white; 
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 20px;
`

export const Newsletter = () => {

    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('service_x9a6mkr', 'template_qiypm7k', e.target, 'user_TZOXgCfRSTnV5ohH3gx12')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    };

    return(
        <Container>
            
            <Title>Newsletter</Title>
            <Desc>Receive Timely Updates On Your Favourite Products</Desc>
            <form onSubmit={sendEmail}>
            <InputContainer>
            <Input type="text" placeholder = "email..." name="email"/>
                <Button type="submit">
                    <SendOutlined/>
                </Button>
            </InputContainer>
            </form>
        </Container>
    )
}

export default Newsletter