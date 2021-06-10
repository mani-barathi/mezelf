import { useState } from "react"
import styled from "styled-components"
import TechBadge from "@/components/TechBadge"
import Project from "@/components/Project"
import ProjectModal from "@/components/ProjectModal"
import { Text, SmallText } from "@/styles/Typography"
import { projects, technologies } from "../details.json"

export default function works() {
  const [currentProject, setCurrentProject] = useState(null)
  const [works] = useState(() => projects.filter((p) => p.show !== false))

  return (
    <Wrapper>
      <Container>
        <Text large>My Works</Text>
        <br />
        <p>
          From Frontend to Backend to Serverless. Check out my latest Projects.
        </p>

        <FlexContainer>
          {technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </FlexContainer>

        <SmallText textMuted bold>
          Click on the Projects to Know More About it.
        </SmallText>

        <ProjectsGrid>
          {works.map((work) => (
            <Project
              key={work.name}
              data={work}
              setCurrentProject={setCurrentProject}
            />
          ))}
        </ProjectsGrid>
      </Container>

      <ProjectModal
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`
const FlexContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`
const ProjectsGrid = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  grid-gap: 2rem;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
