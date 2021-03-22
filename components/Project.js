import styled from "styled-components"
import { fadeInAnimation } from "@/styles/Animation"

export default function Project({ data }) {
    return (
        <Container>
            <Image src={data.imageUrl} />
        </Container>
    )
}

const Container = styled.div`
    max-width:600px;
    transition: all 0.3s ease;
    animation: ease-in 0.3s ${fadeInAnimation};
`

const Image = styled.img`
    width:100%;
    object-fit:cover;
`