import { useEffect, useState } from 'react'
import styled from 'styled-components'

import AboutModal from "@/components/AboutModal"
import { Button } from "@/styles/Button"
import { Text, Paragraph } from "@/styles/Typography"
import { slideDownAnimation, fadeInAnimation } from "@/styles/Animation"
import { user } from "../details.json"

export default function Home() {
  const [isAnimated, setIsAnimated] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const openModal = () => setOpen(true)

  return (
    <Wrapper>
      <Contianer>
        <Text animation={slideDownAnimation('-10px')} large>Hi!</Text>
        <Text animation={fadeInAnimation} large textPink inline>I'm </Text>
        <Text animation={fadeInAnimation} large textBlue inline>{user.name}.</Text>
        <Paragraph isAnimated={isAnimated} >
          {user.shortDescription}
          <ButtonContiner>
            <Button onClick={openModal} color="textBlue">ABOUT ME</Button>
          </ButtonContiner>
        </Paragraph>
      </Contianer>

      <AboutModal open={open} setOpen={setOpen} longDescription={user.longDescription} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex:1;
  display:flex;
  align-items:center;
`
const Contianer = styled.div`
  padding:1rem;
  @media screen and (max-width:600px){
      text-align:center;
  }
`
const ButtonContiner = styled.div`
  margin:1rem 0;
`
