import {useState, useEffect} from "react";
import styled from 'styled-components';
import {useParams} from "react-router-dom";
import NewTitleBlock from '../../components/NewTitleBlock';
import ContentBlock from '../../components/ContentBlock';
import {projectDetails, IProject} from "../../static/json/projectDetails";

const ProjectDetails = () => {
  const {name} = useParams();
  const [project, setProject] = useState<IProject>(projectDetails.currentProjects.Beneficient);

  const projects: {[key: string]: IProject} = Object.assign({}, projectDetails.currentProjects, projectDetails.pastProjects);
  
  useEffect(() => {
    if (name !== undefined){
      setProject(projects[name]);
    }
  }, [name]);

  const titleBlockContent = {
    title: project.name,
    subtitle: project.description,
    image: {
      picture: project.image,
      alt: `${project.name} Project Logo`,
      border: true
    },
    buttons: [
      {
        content: `Project Website`,
        link: project.deployedLink,
      },
      {
        content: `Project Gitlab`,
        link: project.gitlabLink,
      },
    ],
  };

  const problemContent = <ContentText>{project.problem}</ContentText>;
  const solutionContent = <ContentText>{project.solution}</ContentText>;

  return (
    <>
      <NewTitleBlock content={titleBlockContent}/>
      <ContentBlock
        title='The Problem'
        children={problemContent}
      ></ContentBlock>
      <ContentBlock
        title='The Solution'
        children={solutionContent}
      ></ContentBlock>
    </>
  );
};

const ContentText = styled.p`
  padding: 20px 0;
  margin: auto;
`;

export default ProjectDetails;
