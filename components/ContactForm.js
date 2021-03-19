import { useRef, useState } from 'react'
import { Form, FormGroup, FormInput } from "@/styles/Form"
import { Button } from "@/styles/Button"
import { fadeInAnimation } from "@/styles/Animation"

const KEYS = ['name', 'email', 'message']

export default function ContactForm() {
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
        <Form onSubmit={handleSubmit} autoComplete="off">
            {(currentField === 0) &&
                <FormGroup animation={fadeInAnimation}>
                    <label htmlFor="name">Name</label>
                    <FormInput value={currentFieldValue} onChange={handleOnChange} type="text" name="name" id="name" required />
                </FormGroup>
            }
            {(currentField === 1) &&
                <FormGroup animation={fadeInAnimation}>
                    <label htmlFor="email">Email</label>
                    <FormInput value={currentFieldValue} onChange={handleOnChange} type="email" name="email" id="email" required autoFocus />
                </FormGroup>
            }
            {(currentField === 2) &&
                <FormGroup animation={fadeInAnimation}>
                    <label htmlFor="email">Message</label>
                    <FormInput value={currentFieldValue} onChange={handleOnChange} as="textarea" rows="4" type="text" name="message" id="email" required autoFocus />
                </FormGroup>
            }
            <Button textBlue>NEXT</Button>
        </Form>
    )
}
