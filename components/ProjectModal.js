import { useEffect, useRef, useState } from 'react'
import Link from "next/link"
import styled from "styled-components"
import { Wrapper, Overlay } from "@/styles/Modal"
import { Button } from "@/styles/Button"
import TechBadge from './TechBadge'

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
                <Title>{currentProject.name}</Title>
                <Image src={currentProject.imageUrl} />

                <p>{currentProject.description}</p>

                <FlexContainer>
                    {currentProject.technologies.map(tech =>
                        <TechBadge key={tech} name={tech} noBorder textWhite small />
                    )}
                </FlexContainer>

                <FlexContainer flexEnd>
                    <Link href={currentProject.githubLink}>GITHUB</Link>
                    <Link href={currentProject.liveLink}>WEBSITE</Link>
                </FlexContainer>

            </Wrapper>
        </Overlay>
    )
}

const Title = styled.h1`
    font-weight:600;
    text-align:center;
`
const Image = styled.img`
    object-fit:contain;
    width:100%;
    margin:1rem 0;
`
const FlexContainer = styled.div`
    margin:0.5rem 0 0 0;
    display:flex;
    flex-wrap:wrap;
    gap:0.5rem;
    justify-content:${props => props.flexEnd ? 'flex-end' : 'initial'};
`
