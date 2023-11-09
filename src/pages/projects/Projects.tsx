import styled from 'styled-components';

import {NewTitleBlock} from '../../components';
import ProjectsTextMultiCarousel from '../../components/ProjectsTextMultiCarousel';

import content from '../../static/json/projects';

const Projects = () => (
  <PageBody>
    <NewTitleBlock content={content.titleBlock}></NewTitleBlock>
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
