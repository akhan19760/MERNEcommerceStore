import styled from "styled-components";
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";


const Container = styled.div``

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 800;
    margin-right: 15px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 15px;
    cursor: pointer;
`

const Option = styled.option``

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [sort, setSort] = useState("newest");
    const [filters, setFilters] = useState({});

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
          [e.target.name]: value,
        });
      };

      useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


      console.log(filters)
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Store:</FilterText>
                        <Select name="color" onChange={handleFilters}>
                            <Option disabled>Color</Option>
                            <Option>gold</Option>
                            <Option>silver</Option>
                            <Option>yellow</Option>
                            <Option>black</Option>
                        </Select>
                        <Select name="size" onChange={handleFilters}>
                            <Option disabled>Size</Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </Select>
                </Filter>
                <Filter><FilterText>Sort Store:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="trending">Trending</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList;



