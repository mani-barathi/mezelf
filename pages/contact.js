import { } from 'react'
import styled from "styled-components"
import { Form, FormGroup, FormInput } from "@/styles/Form"

export default function contact() {
    return (
        <Wrapper>
            <Container>
                <div>
                    <h1>Let's Keep in Touch</h1>
                    <Form autoComplete="off">
                        <FormGroup>
                            <label htmlFor="name">Name</label>
                            <FormInput type="text" name="name" id="name" required />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="email">Email</label>
                            <FormInput type="text" name="email" id="email" required />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="email">Message</label>
                            <FormInput as="textarea" rows="5" type="text" name="message" id="email" required />
                        </FormGroup>
                    </Form>
                </div>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding:1rem;
`
const Container = styled.div`
    display:grid;
    justify-content:center;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width:700px){
        grid-template-columns: 1fr;
    }
`
