import styled from 'styled-components';

import {TitleBlock} from '../../components';
import ProjectsTextMultiCarousel from '../../components/ProjectsTextMultiCarousel';

import content from '../../static/json/projects';

const Projects = () => (
  <PageBody>
    <TitleBlock content={content.titleBlock}></TitleBlock>
    {content.contentBlocks.map((block, index) => (
      <ProjectsTextMultiCarousel key={index} content={block} />
    ))}
  </PageBody>
);

const PageBody = styled.div`
  background-color: ${(props) => props.theme.colors.cloudBlue};
  background-color: #f8fbff;
`;

export default Projects;
