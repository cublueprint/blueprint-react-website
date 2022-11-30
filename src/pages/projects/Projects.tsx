import styled from 'styled-components';

import TitleBlock from '../../components/TitleBlock';
import ContentBlock from '../../components/ContentBlock';
import ProjectCard from '../../components/ProjectCard';
import Carousel from 'styled-components-carousel';

import content from '../../static/json/projects';

const breakpoints = [
  {
    size: 200,
    settings: {
      slidesToShow: 1,
      showArrows: false,
      showIndicator: false,
      swipeable: true,
    },
  },
  {
    size: 600,
    settings: {
      slidesToShow: 3,
      showArrows: false,
      showIndicator: true,
      swipeable: true,
    },
  },
  {
    size: 1000,
    settings: {
      slidesToShow: 4,
      showArrows: true,
      showIndicator: true,
      center: true,
      swipeable: true,
    },
  },
];

const Projects = () => (
  <PageBody>
    <TitleBlock content={content.titleBlock}></TitleBlock>

    {content.contentBlocks.map((block, index) => (
      <ContentBlock title={block.title}>
        <Carousel center={true} showArrows showIndicator slidesToShow={2}>
          {block.projects.map((project, index) => (
            <ProjectCard props={project} />
          ))}
        </Carousel>
      </ContentBlock>
    ))}
  </PageBody>
);

const PageBody = styled.div`
  background-color: ${(props) => props.theme.colors.skyBlue};
`;

export default Projects;
