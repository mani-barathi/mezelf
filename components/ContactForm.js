import { useEffect, useState } from 'react'
import styled from "styled-components"
import { Form, FormGroup, FormInput } from "@/styles/Form"
import { Button } from "@/styles/Button"
import { fadeInAnimation } from "@/styles/Animation"

export default function ContactForm() {
    const [currentField, setCurrentField] = useState(0)        // 0 - name Field, 1 - email Field, 2 - message Field
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sent, setSent] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!sent) return
        let timer = setTimeout(() => {
            setSent(null)
        }, 5000)
        return () => clearTimeout(timer)
    }, [sent])

    const goToPreviousField = () => setCurrentField(prev => prev - 1)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (currentField <= 1)
            return setCurrentField(prev => prev + 1)

        setLoading(true)
        const newMessage = { name, email, message }
        console.log("newMessage: ", newMessage)
        try {
            // Saving Form Response Goes Here.......
            const response = await fetch('/api/message', {
                method: 'POST',
                body: JSON.stringify(newMessage)
            })
            const data = await response.json()
            if (!data.report)
                return setSent({ success: false })

            console.log(data)
            setName('')
            setEmail('')
            setMessage('')
            setCurrentField(0)
            setSent({ success: true })
        }
        catch (error) {
            console.error(error)
            setSent({ success: false })
        }
        setLoading(false)
    }

    return (
        <Form onSubmit={handleSubmit} autoComplete="off">
            { sent &&
                <Message animation={fadeInAnimation} success={sent.success}>
                    {sent.success ? 'Thanks, your message is received.' : 'Sorry, unable to send Message... Try again later'}
                </Message>
            }

            {(currentField === 0) &&
                <FormGroup animation={fadeInAnimation}>
                    <label htmlFor="name">Name</label>
                    <FormInput value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" required autoFocus placeholder="John Doe" />
                </FormGroup>
            }
            {(currentField === 1) &&
                <FormGroup animation={fadeInAnimation}>
                    <label htmlFor="email">Email</label>
                    <FormInput value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required autoFocus placeholder="john@email.com" />
                </FormGroup>
            }
            {(currentField === 2) &&
                <FormGroup animation={fadeInAnimation}>
                    <label htmlFor="email">Message</label>
                    <FormInput value={message} onChange={(e) => setMessage(e.target.value)} as="textarea" rows="4" name="message" id="email" required autoFocus placeholder="Hey, your website is awesome!" />
                </FormGroup>
            }
            <Button type="button" color="textGrey"
                disabled={(currentField === 0)} onClick={goToPreviousField} >PREVIOUS</Button>
            &nbsp; &nbsp;
            <Button disabled={loading} color="textBlue">
                {(currentField === 2) ? 'SEND' : 'NEXT'}
            </Button>
        </Form>
    )
}

const Message = styled(FormGroup)`
    padding: 0.7rem 0.5rem;
    background-color:${props => props.success ? '#229954' : '#E74C3C'};
    border:none;
`