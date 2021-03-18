import styled, { css } from "styled-components"

const Text = styled.h3`
    color:var(--${props => props.textBlue ? 'textBlue' : props.textPink ? 'textPink' : 'textGrey'});
    display:${props => props.inline ? 'inline' : 'block'};
    font-size:${props => props.medium ? '1.5rem' : props.large ? '3rem' : '1rem'};
    transition: all 1s ease;
    animation: ${props => props.animation ? css`ease-in 0.3s ${props.animation}` : 'none'} ;

    @media screen and (max-width:400px){
    font-size:${props => props.medium ? '1.3rem' : props.large ? '2.3rem' : '1rem'};
    }
`
const Paragraph = styled.div`
    color:var(--${props => props.textBlue ? 'textBlue' : props.textPink ? 'textPink' : 'textGrey'});
    transition: all 0.8s ease;
    opacity: ${props => props.isAnimated ? '1' : '0'};
    transform: ${props => props.isAnimated ? 'translatey(0)' : 'translatey(10px)'};
    max-width:600px;
`

export {
    Text,
    Paragraph
}