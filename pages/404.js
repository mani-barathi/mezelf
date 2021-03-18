import styled from "styled-components"
import Link from 'next/link'
import { Button } from "@/styles/Button"

export default function Error() {
  return (
    <Wrapper>
      <Text large> 404 </Text>
      <Text medium> UH OH! You're lost. </Text>
      <br />
      <Text style={{ maxWidth: '600px' }}> The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage. </Text>
      <br />
      <Link href="/">
        <Button textPink>HOME</Button>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:0 1rem;
  user-select:none;
`
const Text = styled.p`
  color:var(--textGrey);
  font-size:${props => props.medium ? '1.5rem' : props.large ? '10rem' : '1rem'};
  text-align:center;
  @media screen and (max-width:400px){
    font-size:${props => props.medium ? '1.5rem' : props.large ? '7rem' : '1rem'};
  }
`
