import { Badge } from "@material-ui/core"
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import React from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon  from '@mui/icons-material/AccountCircle';
import { logoutUser } from "../Redux/apiCalls";

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    font-weight: 600;
`

const SearchContainer = styled.div`
    border: 0.4px solid lightgray;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    border-radius: 20px;
`

const Input = styled.input`
    border: none;
    border-radius: 40px;
`

const Logo = styled.div`
    font-weight: bold;
    font-size: 34px;
    color: black;
    
`

const Menu = styled.div`
    font-size: 15px;
    cursor: pointer;
    margin-left: 30px;
    color: black;
`

const Centre = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Button1 = styled.button`
    padding: 10px;
    font-size: 15px;
    font-weight: 800;
    background-color: white;
    color: black;
    cursor: pointer;
    border-radius: 25px;
    border: 2px solid black;
    width: 100px;
    height: 40px;
    transition: all 0.3s ease;
    &:hover{
        background-color: black;
        transform: scale(1.1);
        color: white;
    };

`

const Button2 = styled.button`
    padding: 10px;
    font-size: 15px;
    font-weight: 800;
    background-color: white;
    color: black;
    cursor: pointer;
    border-radius: 25px;
    border: 2px solid black;
    width: 100px;
    height: 40px;
    margin-left: 15px;
    transition: all 0.3s ease;
    &:hover{
        background-color: black;
        transform: scale(1.1);
        color: white;
    };

`

const Navbar = () => {
    const user = useSelector(state =>  state.user.currentUser);
    const admin = user ? user.isAdmin : false;
    const qty = useSelector(state => state.cart.quantity);
    const username = useSelector(state => state.user.currentUser.username);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        logoutUser(dispatch);
      }

    console.log(qty);
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style = {{color: "gray", fontSize: 18}}/>
                    </SearchContainer>
                </Left>
                <Centre>
                    <Link to="/" style={{ textDecoration: 'none' }} >
                    <Logo>ELEVATE</Logo>
                    </Link>
                    </Centre>
                <Right>
                    { !user && <>
                    <Link to="/signup">
                    <Button1>SIGN UP</Button1>
                    </Link>
                        <Link to="/signin">
                       <Button2>SIGN IN</Button2>
                       </Link>
                       </>
                    }
                    {admin &&
                    <>
                    <Link to="/admin">Admin</Link>
                    </>
                    }
                    {user && <>
                       <Link to={`/cart`}>
                       <Menu>
                             <ShoppingCartOutlined/>   
                       </Menu>
                       </Link>                            
                    <Menu onClick = {handleClick}>LOGOUT</Menu>
                    </>
                    }
                    {user && <>
                    <Link to = {`/profile/${username}`}>
                    <Menu>
                        <AccountCircleIcon/>
                    </Menu>   
                    </Link>
                    </>
                    }   
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;