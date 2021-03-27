import { useState } from 'react'
import styled from "styled-components"
import TechBadge from "@/components/TechBadge"
import Project from "@/components/Project"
import ProjectModal from "@/components/ProjectModal"
import { Text, SmallText } from "@/styles/Typography";


const TECHNOLOGIES = ['HTML', 'CSS', 'javascript', 'react', 'nodejs', 'express', 'python', 'django', 'flask', 'firebase']

const PROJECTS = [{
    description: "A Music Streaming Web App",
    githubLink: "https://github.com/mani-barathi/Music-Streaming-App",
    imageUrl: "https://cdn.sanity.io/images/j1zm8pj9/production/d16d22fec5b4541eba518b2af5c8574ac5709741-700x400.jpg?w=1000&h=1000&fit=max",
    liveLink: "https://music-streaming-app-4a392.web.app/",
    name: "Octave",
    order: 1,
    show: true,
    slug: { _type: "slug", current: "octave" },
    technologies: ["React", "Material-UI", "Firebase"]
}, {
    description: "A Website Inspired from Instagram, where users can share images",
    githubLink: "https://github.com/mani-barathi/Socialmedia",
    imageUrl: "https://cdn.sanity.io/images/j1zm8pj9/production/398977f6705d66d574d161370e630a6d346880bf-700x400.jpg?w=1000&h=1000&fit=max",
    liveLink: "http://socialmediadjango.herokuapp.com/",
    name: "Socialmedia",
    order: 2,
    show: true,
    slug: { _type: "slug", current: "socialmedia" },
    technologies: ["Django", "Bootstrap", "Heroku"]
}
]

export default function works() {
    const [currentProject, setCurrentProject] = useState(null)

    return (
        <Wrapper>
            <Container>
                <Text large>My Works</Text>
                <br />
                <p>From Frontend to Backend to Serverless. Check out my latest Projects.</p>

                <FlexContainer>
                    {TECHNOLOGIES.map(tech =>
                        <TechBadge key={tech} name={tech} />
                    )}
                </FlexContainer>

                <SmallText textMuted bold>Click on the Projects to Know More About it.</SmallText>

                <ProjectsGrid>
                    {PROJECTS.map(project =>
                        <Project key={project.name} data={project} setCurrentProject={setCurrentProject} />
                    )}
                </ProjectsGrid>

            </Container>

            <ProjectModal currentProject={currentProject} setCurrentProject={setCurrentProject} />

        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex:1;
    padding:1rem;
    display:flex;
    justify-content:center;
`
const Container = styled.div`
    width:100%;
    max-width:800px;
    display:flex;
    flex-direction:column;
`
const FlexContainer = styled.div`
    margin:1rem 0;
    display:flex;
    flex-wrap:wrap;
    gap:0.5rem;
`
const ProjectsGrid = styled.div`
    margin:1rem 0;
    display:grid;
    grid-template-columns: 1fr 1fr;
    justify-items:center;
    grid-gap:2rem;
    @media screen and (max-width:800px){
        grid-template-columns: 1fr;
    }
`