import { useEffect, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import Button from "@/styles/Button"
import AboutModal from "@/components/AboutModal"

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
        <Text animation={slideDownAnimation} large>Hi!</Text>
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
const slideDownAnimation = keyframes`
  from{ transform: translatey(-10px) ; opacity:0; }
  to {transform: translatey(0) ; opacity:1; }
`
const fadeInAnimation = keyframes`
  from{ opacity:0; }
  to { opacity:1; }
`
const Text = styled.h3`
  color:var(--${props => props.textBlue ? 'textBlue' : props.textPink ? 'textPink' : 'textGrey'});
  display:${props => props.inline ? 'inline' : 'block'};
  font-size:${props => props.medium ? '1.5rem' : props.large ? '3rem' : '1rem'};
  transition: all 1s ease;
  animation: ${props => props.animation ? css`ease-in 0.3s ${props.animation}` : 'none'} ;

  @media screen and (max-width:400px){
    font-size:${props => props.medium ? '1.3rem' : props.large ? '2.4rem' : '1rem'};
  }
`
const Paragraph = styled.div`
  transition: all 0.8s ease;
  opacity: ${props => props.isAnimated ? '1' : '0'};
  transform: ${props => props.isAnimated ? 'translatey(0)' : 'translatey(10px)'};
  max-width:600px;
`
const ButtonContiner = styled.div`
  margin:1rem 0;
`
