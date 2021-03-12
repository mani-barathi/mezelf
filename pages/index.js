import styled from 'styled-components'

export default function Home() {
  return (
    <Wrapper>
      <Contianer>
        <Text large>Hi!</Text>
        <Text large textPink inline>I'm </Text>
        <Text large textBlue inline>Manibarathi.</Text>
        <p style={{ maxWidth: '600px' }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus placeat ratione accusamus perferendis quam dolore voluptates aperiam, eaque fuga.</p>
      </Contianer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex:1;
  display:flex;
  justify-context:center;
  align-items:center;
`
const Contianer = styled.div`
  padding:1rem;
  @media screen and (max-width:600px){
      text-align:center;
  }
`
const Text = styled.h3`
  color:var(--${props => props.textBlue ? 'textBlue' : props.textPink ? 'textPink' : 'textGrey'});
  display:${props => props.inline ? 'inline' : 'block'};
  font-size:${props => props.medium ? '1.5rem' : props.large ? '3rem' : '1rem'};

  @media screen and (max-width:400px){
    font-size:${props => props.medium ? '1.3rem' : props.large ? '2.4rem' : '1rem'};
  }
`
