import { } from 'react'
import styled from "styled-components"
import { Text } from "@/styles/Typography"
import { Button } from "@/styles/Button"
import ContactForm from "@/components/ContactForm"

export default function contact() {
    return (
        <Wrapper>
            <Container>
                <div>
                    <Text large>Let's Keep in Touch</Text>
                    <br />
                    <Text style={{ fontWeight: '600' }}>
                        If you wanna get in touch, talk to me about a project collaboration or just say hi, send me a message by filling up the form below.
                    </Text>
                    <br />
                    <br />
                </div>

                <ContactForm />

                <div style={{ width: "100%", marginTop: "4rem" }} >
                    <Text medium>Let's Get Social</Text>
                    <br />
                    <FlexContainer>
                        <Button hoverTextWhite color="facebook">FACEBOOK</Button>
                        <Button color="instagram">INSTAGRAM</Button>
                        <Button color="twitter">TWITTER</Button>
                        <Button color="textGrey">GITHUB</Button>
                        <Button hoverTextWhite color="linkedin">LINKEDIN</Button>
                    </FlexContainer>
                </div>
            </Container>
        </Wrapper >
    )
}

const Wrapper = styled.div`
    flex:1;
    padding:1rem;
    display:flex;
    justify-content:center;
    align-items:center;
`
const Container = styled.div`
    width:100%;
    max-width:700px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const FlexContainer = styled.div`
    margin:0.5rem 0 0 0;
    display:flex;
    flex-wrap:wrap;
    gap:0.5rem;
    justify-content:${props => props.flexEnd ? 'flex-end' : 'initial'};
    align-items:center;
`