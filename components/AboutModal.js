import { useEffect, useRef, useState } from 'react'
import styled from "styled-components"
import { Wrapper, Overlay } from "@/styles/Modal"

export default function AboutModal({ open, setOpen }) {
    const wrapperRef = useRef()
    const [slideIn, setSlideIn] = useState(false)

    useEffect(() => {
        setSlideIn(open)
    }, [open])

    if (!open)
        return null

    const closeModal = (e) => {
        if (e.target === wrapperRef.current) {
            setSlideIn(false)
            let timer = setTimeout(() => {
                setOpen(false)
                clearTimeout(timer)
            }, 500)
        }
    }

    return (
        <Overlay ref={wrapperRef} onClick={closeModal}>
            <Wrapper slideIn={slideIn}>
                <center>
                    <h1>About Me</h1>
                    <Avatar src="https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png" alt="" />
                </center>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos repellat eaque nemo incidunt tempora! Beatae deleniti impedit perspiciatis assumenda quidem aliquid praesentium sed quam ullam repellat obcaecati optio sunt quaerat, quod esse perferendis, rem suscipit? Ex soluta dignissimos quas ratione.</div>
            </Wrapper>
        </Overlay>
    )
}

const Avatar = styled.img`
    border-radius:50%;
    width:100px;
    height:100px;
    object-fit:cover;
    margin:1rem 0;
`