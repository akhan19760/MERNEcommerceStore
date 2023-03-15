import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/apiCalls";

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
    width: 25%;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
`

const Title = styled.h1`
  font-size: 27px;
  font-weight: 800;
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

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: black;
    color: white;
    border-radius: 20px;
    cursor: pointer;
    margin-bottom: 10px;
    transition: all 0.3s ease;
    &:hover{
        background-color: black;
        transform: scale(1.1);
        color: white;
    };
`

const Error = styled.span`
    color: red;
`

const Dink = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`

const SignIn = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

    return (
              <Container>
                <Wrapper>
                  <Title>SIGN IN</Title>
                  <Form>
                    <Input placeholder="username"  onChange={(e) => setUsername(e.target.value)}/>
                    <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleClick}>LOGIN</Button>
                    {error && (<span className = "text-red-500 block">Incorrect username or password.</span>)}
                    <Dink>FORGET PASSWORD</Dink>
                    <Dink><Link to="/signup">CREATE A NEW ACCOUNT</Link></Dink>
                  </Form>
                </Wrapper>
              </Container>
    );
};
export default SignIn
