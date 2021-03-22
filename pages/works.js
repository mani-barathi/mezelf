import { } from 'react'
import styled from "styled-components"
import { Text } from "@/styles/Typography";

import TechBadge from "@/components/TechBadge"

const TECHNOLOGIES = ['HTML', 'CSS', 'javascript', 'react', 'nodejs', 'express', 'python', 'django', 'flask', 'firebase']

export default function works() {
    return (
        <Wrapper>
            <Container>
                <Text large>My Works</Text>
                <br />
                <p>From Frontend to Backend to Serverless. Check out my latest Projects.</p>

                <BadgeContainer>
                    {TECHNOLOGIES.map(tech =>
                        <TechBadge key={tech} name={tech} />
                    )}
                </BadgeContainer>

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
const BadgeContainer = styled.div`
    margin:1rem 0;
    display:flex;
    flex-wrap:wrap;
    gap:0.5rem;
`