import { useEffect, useRef, useState } from 'react'
import { Wrapper, Overlay } from "@/styles/Modal"

export default function AboutModal({ currentProject, setCurrentProject }) {
    const wrapperRef = useRef()
    const [slideIn, setSlideIn] = useState(false)

    useEffect(() => {
        setSlideIn(currentProject)
    }, [currentProject])

    if (!currentProject)
        return null

    const closeModal = (e) => {
        if (e.target === wrapperRef.current) {
            setSlideIn(false)
            let timer = setTimeout(() => {
                setCurrentProject(false)
                clearTimeout(timer)
            }, 500)
        }
    }

    return (
        <Overlay ref={wrapperRef} onClick={closeModal}>
            <Wrapper slideIn={slideIn}>
                <h1>Title</h1>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos repellat eaque nemo incidunt tempora! Beatae deleniti impedit perspiciatis assumenda quidem aliquid praesentium sed quam ullam repellat obcaecati optio sunt quaerat, quod esse perferendis, rem suscipit? Ex soluta dignissimos quas ratione.</div>
            </Wrapper>
        </Overlay>
    )
}
