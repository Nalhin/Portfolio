import React from "react";
import { withDefaultNamespaces } from "../lib/i18n/withDefaultNamespaces";
import { useQuery } from "@apollo/react-hooks";
import { getRepositoriesById } from "../lib/graphql/queries/getRepositories";
import Project from "../components/project/Project";
import { RepositoryProject } from "../interfaces/RepositoryProject";
import { projectIds } from "../constants/displayedProjects";
import styled from "@emotion/styled";
import ProjectPlaceholders from "../components/project/ProjectPlaceholder";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type Response = {
  nodes: RepositoryProject[];
};

type InputProps = {
  id: string[];
};

const Projects = () => {
  const { loading, data } = useQuery<Response, InputProps>(
    getRepositoriesById,
    {
      variables: { id: projectIds },
    },
  );

  return (
    <StyledContainer>
      {loading ? (
        <ProjectPlaceholders />
      ) : (
        data.nodes.map(project => (
          <Project project={project} key={project.name} />
        ))
      )}
    </StyledContainer>
  );
};

Projects.getInitialProps = async () => {
  return {
    namespacesRequired: withDefaultNamespaces(['projects']),
  };
};

export default Projects;
