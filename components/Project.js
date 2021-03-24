import styled from "styled-components"
import TechBadge from "@/components/TechBadge"
import { fadeInAnimation } from "@/styles/Animation"

export default function Project({ data, setCurrentProject }) {
    const openProject = () => setCurrentProject(data)

    return (
        <Container onClick={openProject}>
            <Cover>
                <div>
                    {data.technologies.map(tech => <TechBadge key={tech} name={tech} />)}
                </div>
            </Cover>
            <Title>{data.name}</Title>
            <Image src={`https://via.placeholder.com/500x280.png`} />
        </Container>
    )
}
const Cover = styled.div`
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    opacity:0;
    transition: all 0.3s ease;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgba(0,0,0,0.4);
    & > div{
        max-width:75%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        gap:0.5rem;
    }
`
const Container = styled.div`
    max-width:600px;
    transition: all 0.2s ease;
    animation: ease-in 0.3s ${fadeInAnimation};
    box-shadow: 2px 5px 10px 5px  rgba(80,80,80, 0.2);
    cursor:pointer;
    position:relative;
    &:hover ${Cover}{
        opacity:1;
    }

`
const Image = styled.img`
    width:100%;
    object-fit:cover;
`
const Title = styled.small`
    background-color:var(--lightBg);
    display:block;
    padding:0.1rem 0;
    text-align:center;
    font-weight:600;
    text-transform: uppercase;
    letter-spacing:1px;
    color: var(--darkBg);
    user-select:none;
`