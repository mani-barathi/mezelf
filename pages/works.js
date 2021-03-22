import { } from 'react'
import styled from "styled-components"
import { Text } from "@/styles/Typography";

export default function works() {
    return (
        <Wrapper>
            <Container>
                <Text large>My Works</Text>
                <br />
                <p>From Frontend to Backend to Serverless. Check out my latest Projects.</p>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex:1;
    padding:1rem;
    display:flex;
    justify-content:center;
`
const Container = styled.div`
    width:100%;
    max-width:800px;
    display:flex;
    flex-direction:column;
`