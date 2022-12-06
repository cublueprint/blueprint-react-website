import styled from 'styled-components';

import TitleBlock from '../../components/TitleBlock';
import ContentBlock from '../../components/ContentBlock';

import content from '../../static/json/projects';
import ProjectDisplay from './ProjectDisplay';

const Projects = () => (
  <PageBody>
    <TitleBlock content={content.titleBlock}></TitleBlock>
    {content.contentBlocks.map((block, index) => (
      <ContentBlock title={block.title}>
        <ProjectDisplay props={block.projects}/>
      </ContentBlock>
    ))}
  </PageBody>
);

const PageBody = styled.div`
  background-color: ${(props) => props.theme.colors.skyBlue};
`;

export default Projects;
