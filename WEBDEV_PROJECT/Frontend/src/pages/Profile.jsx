import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react"
import { useSelector } from "react-redux";
import { publicRequest } from "../request";

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
    text-align: center;
`

const Info = styled.p`
    font-size: 15px;
    margin: 15px 2px;
`

const Profile = () => {

    const userInfo = useSelector(((state) => state.user.currentUser));
    const id = useSelector(((state) => state.user.currentUser._id));
    const token = useSelector(((state) => state.user.currentUser.accessToken));

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const {isFetching, error} = useSelector((state) => state.user);

  const handleClick = async (e) => {
    e.preventDefault();
    try{ await publicRequest.put(`users/${id}`, {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password
  }, token);
}
catch (err){
    console.log(err);
}
  };

    return (
        <Container>
            <Wrapper>
                <Title>Welcome: {userInfo.username}</Title>
                <Form>
                    <Input placeholder={userInfo.firstName}  onChange={(e) => setFirstName(e.target.value)}/>
                    <Input placeholder={userInfo.lastName}  onChange={(e) => setLastName(e.target.value)}/>
                    <Input placeholder={userInfo.username}  onChange={(e) => setUsername(e.target.value)}/>
                    <Input placeholder={userInfo.email}  onChange={(e) => setEmail(e.target.value)}/>
                    <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <Button onClick={handleClick}>Update</Button>
                    {error && (<span className = "text-red-500 block">Something went wrong...</span>)}
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Profile;
