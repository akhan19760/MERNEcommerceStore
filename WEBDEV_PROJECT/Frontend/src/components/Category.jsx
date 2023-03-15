import styled from "styled-components"
import {Categories} from "../info"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const Category = () => {
    return <Container>
        {Categories.map(item=>(
            <CategoryItem item = {item} key = {item.id}/>
        ))}
    </Container>;
};

export default Category;
