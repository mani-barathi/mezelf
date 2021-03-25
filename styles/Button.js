import styled from "styled-components"

const Button = styled.button`
    cursor:pointer;
    transition:all 0.3s ease;
    padding:${props => props.small ? '0.2rem 0.6rem' : '0.3rem 1rem'};
    border-radius:3px;
    font-size:${props => props.small ? '0.8rem' : '0.95rem'};
    font-weight:600;
    user-select:none;
    border: 2px solid var(--${props => props.color});
    background-color:transparent;
    color:var(--${props => props.color});
    letter-spacing:0.5px;

    ${props => props.color === 'instagram' && `
        background: linear-gradient(72deg, rgba(235,76,76,1) 0%, rgba(252,176,69,1) 100%);
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
  `}

    &:hover{
        color: ${props => props.hoverTextWhite ? 'var(--textGrey)' : 'var(--darkBg)'};
        background-color: var(--${props => props.color});
        ${props => props.color === 'instagram' && `
            background: linear-gradient(72deg, rgba(235,76,76,1) 0%, rgba(252,176,69,1) 100%);
            -webkit-text-fill-color: var(--darkBg); 
            -moz-text-fill-color: var(--darkBg);
        `}
    }

    &:active{
        transform: translatey(5px);
    }
    &:disabled{
        opacity:0.5;
        cursor: no-drop;
    }
`
export {
    Button
}