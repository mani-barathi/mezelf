import styled from "styled-components"

const Overlay = styled.div`
    z-index:10;
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgba(0,0,0,0.5);
    transition: all 0.5s ease;
    padding: 1rem;
`
const Wrapper = styled.div`
    padding: 1rem;
    background-color:var(--textGrey);
    border-radius:7px;
    width:100%;
    max-width:535px;
    color: var(--darkBg);
    cursor:default;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    box-shadow: 0px 5px 16px 0px rgba(50, 50, 50, 0.73);
    opacity:${props => props.slideIn ? '1' : '0'};
    transform:${props => props.slideIn ? 'translatey(0)' : 'translatey(-30vh)'};
    transition: all 0.3s ease;
`
export {
    Overlay,
    Wrapper
}