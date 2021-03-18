import { keyframes } from 'styled-components'

const slideDownAnimation = (y) => keyframes`
  from{ transform: translatey(${y}) ; opacity:0; }
  to {transform: translatey(0) ; opacity:1; }
`
const fadeInAnimation = keyframes`
  from{ opacity:0; }
  to { opacity:1; }
`

export {
    slideDownAnimation,
    fadeInAnimation
}