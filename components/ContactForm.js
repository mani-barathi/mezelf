import { useState } from 'react'
import { Form, FormGroup, FormInput } from "@/styles/Form"
import { Button } from "@/styles/Button"
import { fadeInAnimation } from "@/styles/Animation"

export default function ContactForm() {
    const [currentField, setCurrentField] = useState(0)        // 0 - name Field, 1 - email Field, 2 - message Field
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const goToPreviousField = () => {
        setCurrentField(prev => prev - 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (currentField <= 1)
            setCurrentField(prev => prev + 1)
        else {
            // Saving Form Response Goes Here.......
            const data = { name, email, message }
            console.log("data: ", data)
            setName('')
            setEmail('')
            setMessage('')
            setCurrentField(0)
        }
    }

    return (
        <Form onSubmit={handleSubmit} autoComplete="off">
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
            <Button type="button" disabled={(currentField === 0)} onClick={goToPreviousField} >PREVIOUS</Button>
            &nbsp; &nbsp;
            <Button textBlue>{(currentField === 2) ? 'SEND' : 'NEXT'}</Button>
        </Form>
    )
}
