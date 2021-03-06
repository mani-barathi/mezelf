import styled, { css } from "styled-components"

const Form = styled.form`
    width:100%;
`
const FormGroup = styled.div`
    display:flex;
    flex-direction:column;
    margin: 1rem 0;
    border-bottom:2px solid #353535;
    border-radius:4px;
    background-color:#353535;
    transition:all 0.2s ease;
    animation: ${props => props.animation ? css`ease-in 0.3s ${props.animation}` : 'none'} ;
    &:focus-within{
        border-bottom:2px solid #6B6969;
    }
    
    & > label{
        margin:0.2rem 0 0.2rem 0.5rem;
        font-size:0.9rem;
        font-weight:600;
    }
`
const FormInput = styled.input`
    font-size:1.1rem;
    padding:0.5rem 0.7rem;
    border-radius:3px;
    background-color:transparent;
    color:var(--textGrey);
    width:100%;
    resize:vertical;
    scrollbar-width: thin;
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: var(--darkBg);
      }
      
    &::-webkit-scrollbar {
        width: 5px;
        background-color: #6B6969;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: #6B6969;
    }
`

export {
    Form,
    FormGroup,
    FormInput
}