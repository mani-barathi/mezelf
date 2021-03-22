import styled from "styled-components"

const Button = styled.button`
    cursor:pointer;
    transition:all 0.3s ease;
    padding:0.3rem 1rem;
    border-radius:3px;
    font-size:0.95rem;
    font-weight:600;
    user-select:none;
    border: 2px solid var(--${prop => prop.textPink ? 'textPink' : prop.textBlue ? 'textBlue' : 'textGrey'});
    background-color:transparent;
    color:var(--${prop => prop.textPink ? 'textPink' : prop.textBlue ? 'textBlue' : 'textGrey'});

    &:hover{
        color: var(--darkBg);
        background-color: var(--${prop => prop.textPink ? 'textPink' : prop.textBlue ? 'textBlue' : 'textGrey'});
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