import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.15);
    cursor: pointer;
    opacity: 0;
    transition: all 0.5s ease;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`


const Img = styled.img`
    height: 80%;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    cursor: pointer;
    margin: 5px;
    transition: all 0.3s ease;
    &:hover{
        background-color: white;
        transform: scale(1.1);
        color: black;
    };
`

const Product = ({item}) => {

    return (
        <Container>
            <Img src = {item.img}/>
            <Link to={`/product/${item._id}`}>
            <Info>
              <Icon>
              <ShoppingCartOutlined/>
              </Icon>
            </Info>
            </Link>
        </Container>
    )
}

export default Product
