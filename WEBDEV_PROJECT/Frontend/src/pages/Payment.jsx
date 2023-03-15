import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react"
import { useSelector } from "react-redux";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)),
        url("https://images.pexels.com/photos/5325757/pexels-photo-5325757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") 
        top -50px left 0px;
    display: flex;
    align-items: center;
    justify-content: center;  
    background-size: cover;  
`

const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`

const Terms = styled.span`
    font-size: 14px;
    margin: 20px 0px;
`

const Success = styled.span`
    color: green;
`

const Button = styled.button`
  width: 40%;
  border: ;
  padding: 15px 20px;
  background-color: white;
  color: black;
  font-weight: 800;
  border-radius: 25px;
  border: 2px solid black;
  cursor: pointer;
  transition: all 0.3s ease;
    &:hover{
        background-color: black;
        transform: scale(1.1);
        color: white;
    };  
`;

const Title = styled.h1`
    font-size: 27px;
    font-weight: 800;
`

const Info = styled.p`
    font-size: 15px;
    margin: 15px 2px;
`

const Payment = () => {


    const firstName = useRef();
    const lastName = useRef();
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const rePassword = useRef();
    const nav = useNavigate()

    const {isFetching, error} = useSelector((state) => state.user);

  const handleClick = async (e) => {
    e.preventDefault();
    if(password.current.value !== rePassword.current.value){
        rePassword.current.setCustomValidity("Passwords do not match!");
    }
    else{
        const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value
        };
        try{ await axios.post(`${"http://localhost:5000/api/auth/signup"}`, user);
        nav("/signin");
    }
    catch(err) {
        console.log(err);
    }
}
  };

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="first name" ref = {firstName}/>
                    <Input placeholder="last name" ref = {lastName}/>
                    <Input placeholder="username" ref = {username} />
                    <Input placeholder="email" ref = {email}/>
                    <Input placeholder="password" type="password" ref = {password}/>
                    <Input placeholder="confirm password" type="password" ref = {rePassword}/>
                    <Terms>
                        I agree to the <b>TERMS OF SERVICE</b> and <b>PRIVACY POLICY</b>
                    </Terms>
                    <Button onClick={handleClick}>Sign Up</Button>
                    <Info>Already have an account? <Link to="/signin"><b>Signin</b></Link></Info>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Payment;
