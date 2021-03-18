import { useRef, useState } from 'react'
import styled from "styled-components"
import { Form, FormGroup, FormInput } from "@/styles/Form"
import { Text } from "@/styles/Typgraphy"
import { Button } from "@/styles/Button"

const KEYS = ['name', 'email', 'message']
export default function contact() {
    const [currentField, setCurrentField] = useState(0)
    const [currentFieldValue, setCurrentFieldValue] = useState('')
    const dataRef = useRef({})

    const handleOnChange = (e) => setCurrentFieldValue(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        dataRef.current[KEYS[currentField]] = currentFieldValue

        console.log(dataRef.current)

        if (currentField <= 1)
            setCurrentField(prev => prev + 1)
        else if (currentField === 2)
            setCurrentField(0)

        setCurrentFieldValue('')
    }

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
                <Form onSubmit={handleSubmit} autoComplete="off">
                    {(currentField === 0) &&
                        <FormGroup>
                            <label htmlFor="name">Name</label>
                            <FormInput value={currentFieldValue} onChange={handleOnChange} type="text" name="name" id="name" required />
                        </FormGroup>
                    }
                    {(currentField === 1) &&
                        <FormGroup>
                            <label htmlFor="email">Email</label>
                            <FormInput value={currentFieldValue} onChange={handleOnChange} type="email" name="email" id="email" required autoFocus />
                        </FormGroup>
                    }
                    {(currentField === 2) &&
                        <FormGroup>
                            <label htmlFor="email">Message</label>
                            <FormInput value={currentFieldValue} onChange={handleOnChange} as="textarea" rows="5" type="text" name="message" id="email" required autoFocus />
                        </FormGroup>
                    }
                    <Button textBlue>NEXT</Button>
                </Form>
                <div style={{ width: "100%", marginTop: "4rem" }} >
                    <Text medium>Let's Get Social</Text>
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