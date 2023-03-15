import styled from "styled-components"
import { Link } from 'react-router-dom';

const Container = styled.div`
    flex: 1; 
    margin: 3px;
    height: 70vh;
    position: relative;
    color: black;
`

const Img = styled.img`
    width: 100%; 
    height: 100%;
    object-fit: cover;    
`

const Title = styled.h1`
    margin-bottom: 30px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: black;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    transition: all 0.3s ease;
    &:hover{
        background-color: white;
        transform: scale(1.1);
        color: black;
    };
    
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Img src = {item.img}/>
            <Info>
                <Title>
                    {item.title}
                </Title>
                <Link to={`/products/${item.cat}`}>
                <Button>
                    SHOP NOW
                </Button>
                </Link>
            </Info>
        </Container>
    )
}

export default CategoryItem
