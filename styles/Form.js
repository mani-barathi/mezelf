import styled from "styled-components"

const Form = styled.form`
    padding:1rem 0;
    width:100%;
    max-width:500px;
`
const FormGroup = styled.div`
    display:flex;
    flex-direction:column;
    margin: 1rem 0;
    border-bottom:2px solid #353535;
    border-radius:4px;
    background-color:#353535;
    transition:all 0.2s ease;
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
`

export {
    Form,
    FormGroup,
    FormInput
}