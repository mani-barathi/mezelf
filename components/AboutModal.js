import { useRef } from 'react'
import styled from "styled-components"

export default function AboutModal({ open, setOpen }) {
    const wrapperRef = useRef()

    if (!open)
        return null

    const closeModal = (e) => {
        if (e.target === wrapperRef.current)
            setOpen(false)
    }

    return (
        <Overlay ref={wrapperRef} onClick={closeModal}>
            <Wrapper >
                <h1>About Me</h1>
                <Avatar src="https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png" alt="" />
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos repellat eaque nemo incidunt tempora! Beatae deleniti impedit perspiciatis assumenda quidem aliquid praesentium sed quam ullam repellat obcaecati optio sunt quaerat, quod esse perferendis, rem suscipit? Ex soluta dignissimos quas ratione.</div>
            </Wrapper>
        </Overlay>
    )
}

const Overlay = styled.div`
    z-index:10;
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgba(0,0,0,0.5);
    transition: all 0.3s ease;
    padding: 1rem;
`
const Wrapper = styled.div`
    padding: 1rem;
    background-color:var(--textGrey);
    border-radius:10px;
    width:100%;
    max-width:500px;
    color: var(--darkBg);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    box-shadow: 0px 5px 16px 0px rgba(50, 50, 50, 0.73);
`
const Avatar = styled.img`
    border-radius:50%;
    width:100px;
    height:100px;
    object-fit:cover;
    margin:1rem 0;
`