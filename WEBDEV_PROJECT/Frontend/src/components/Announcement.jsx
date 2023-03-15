import styled from "styled-components"

const Container = styled.div`
    height: 27px;
    background-color: gold;
    color: white;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Announcements = () => {
    return (
        <Container>
            End Of Season Sale! Flat 50% Discount On All Summer Items
        </Container>
    )
}

export default Announcements
