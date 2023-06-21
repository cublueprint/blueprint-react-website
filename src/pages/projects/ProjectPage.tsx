import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import TitleBlock from '../../components/TitleBlock';
import ContentBlock from '../../components/ContentBlock';

const ProjectPage = () => {
  const location = useLocation();
  const { projectDetails } = location.state;

  const titleBlockContent = {
    title: projectDetails.name,
    subtitle: projectDetails.description,
    image: {
      picture: projectDetails.description,
      alt: `${projectDetails.name} Project Logo`,
    },
    buttons: [
      {
        content: `${projectDetails.name} Website`,
        link: '#',
      },
      {
        content: `${projectDetails.name} Gitlab`,
        link: '#',
      },
    ],
  };

  const problemContent = <ContentText>{projectDetails.problem}</ContentText>;
  const solutionContent = <ContentText>{projectDetails.solution}</ContentText>;

  return (
    <>
      <TitleBlock content={titleBlockContent}></TitleBlock>
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
  width: 70%;
  margin: auto;
`;

export default ProjectPage;
