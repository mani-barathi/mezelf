import styled from "styled-components"
import { fadeInAnimation } from "@/styles/Animation"

export default function Project({ data }) {
    return (
        <Container>
            <Title>{data.name}</Title>
            <Image src={`https://via.placeholder.com/500x280.png`} />
        </Container>
    )
}

const Container = styled.div`
    max-width:600px;
    transition: all 0.2s ease;
    animation: ease-in 0.3s ${fadeInAnimation};
    box-shadow: 2px 5px 10px 5px  rgba(80,80,80, 0.2);
    cursor:pointer;
`
const Image = styled.img`
    width:100%;
    object-fit:cover;
`
const Title = styled.small`
    background-color:#B3B6B7;
    display:block;
    padding:0.1rem 0;
    text-align:center;
    font-weight:600;
    text-transform: uppercase;
    letter-spacing:1px;
    color: var(--darkBg);
    user-select:none;
`