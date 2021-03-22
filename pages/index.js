import { useEffect, useState } from 'react'
import styled from 'styled-components'

import AboutModal from "@/components/AboutModal"
import { Button } from "@/styles/Button"
import { Text, Paragraph } from "@/styles/Typography"
import { slideDownAnimation, fadeInAnimation } from "@/styles/Animation"

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
        <Text animation={fadeInAnimation} large textBlue inline>Manibarathi.</Text>
        <Paragraph isAnimated={isAnimated} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus placeat ratione accusamus perferendis quam dolore voluptates aperiam, eaque fuga.
          <ButtonContiner>
            <Button onClick={openModal} textBlue>ABOUT ME</Button>
          </ButtonContiner>
        </Paragraph>
      </Contianer>

      <AboutModal open={open} setOpen={setOpen} />
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
