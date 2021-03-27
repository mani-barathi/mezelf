import styled from "styled-components"
import { Text } from "@/styles/Typography"
import { Button } from "@/styles/Button"
import ContactForm from "@/components/ContactForm"
import { socialLinks } from "../details.json"

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
                        {socialLinks.facebook &&
                            <Button as="a" target="_blank" href={socialLinks.facebook} hoverTextWhite color="facebook">FACEBOOK</Button>}

                        {socialLinks.instagram &&
                            <Button as="a" target="_blank" href={socialLinks.instagram} color="instagram">INSTAGRAM</Button>}

                        {socialLinks.twitter &&
                            <Button as="a" target="_blank" href={socialLinks.twitter} color="twitter">TWITTER</Button>}

                        {socialLinks.github &&
                            <Button as="a" target="_blank" href={socialLinks.github} color="textGrey">GITHUB</Button>}

                        {socialLinks.linkedin &&
                            <Button as="a" target="_blank" href={socialLinks.linkedin} hoverTextWhite color="linkedin">LINKEDIN</Button>}
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