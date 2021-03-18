import { } from 'react'
import styled from "styled-components"
import { Form, FormGroup, FormInput } from "@/styles/Form"
import Button from "@/styles/Button"

export default function contact() {
    return (
        <Wrapper>
            <Container>
                <div>
                    <h1>Let's Keep in Touch</h1>
                    <br />
                    <h3 style={{ fontWeight: '500' }}>
                        If you wanna get in touch, talk to me about a project collaboration or just say hi, send me a message by filling up the form below.
                    </h3>
                    <br />
                    <br />
                </div>
                <Form autoComplete="off">
                    <FormGroup>
                        <label htmlFor="name">Name</label>
                        <FormInput type="text" name="name" id="name" required />
                    </FormGroup>
                    <Button textBlue>Next</Button>
                    {/* <FormGroup>
                        <label htmlFor="email">Email</label>
                        <FormInput type="text" name="email" id="email" required />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="email">Message</label>
                        <FormInput as="textarea" rows="5" type="text" name="message" id="email" required />
                    </FormGroup> */}
                </Form>
                <div style={{ width: "100%", marginTop: "4rem" }} >
                    <h2>Let's Get Social</h2>
                    <br />
                    <Button>INSTAGRAM</Button> &nbsp;
                    <Button>GITHUB</Button>    &nbsp;
                    <Button>LINKEDIN</Button>  &nbsp;
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