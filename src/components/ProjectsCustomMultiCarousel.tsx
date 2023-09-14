import styled from 'styled-components';
import { HomeBlockProps } from '../interfaces/HomeBlockProps';
import ProjectCard from './ProjectTextCard';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


const ProjectsMultiCarousel = ({ content }: HomeBlockProps) => {
  return (
    <HomeProjectsBlockDiv>
      <Title>{content.title.text}</Title>
      <CarouselWrapper>
        {content.slider!.length < 1 && <div>Coming soon...</div>}
        {content.slider!.length === 1 &&
          content.slider!.map((project) => <ProjectCard props={project} />)}
        {content.slider!.length > 1 && (
          <Carousel responsive={responsive}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </Carousel>
        )}
      </CarouselWrapper>
    </HomeProjectsBlockDiv>
  );
};

const HomeProjectsBlockDiv = styled.div`
  padding: 50px;
  @media ${(props) => `${props.theme.viewport.monitor}`} {
    width: 72em;
    margin: auto;
  }
`;

const CarouselWrapper = styled.div`
  padding: 50px;
`;

let Title = styled.h1`
  grid-area: Title;
  font-size: ${(themeProps) => themeProps.theme.fontSizes.small};
  background-color: ${(themeProps) => themeProps.theme.colors.cloudBlue};
  font-family: ${(themeProps) => themeProps.theme.fonts.heading};
  margin: 0;
  padding: 10px 0px;
  height: 1.8em;
  width: 100%;
  border-radius: 15px;
  text-align: center;
  @media ${(themeProps) => `${themeProps.theme.viewport.mediumMobile}`} {
    font-size: ${(themeProps) => themeProps.theme.fontSizes.regular};
  }
  @media ${(themeProps) => `${themeProps.theme.viewport.tablet}`} {
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
  }
`;

export default ProjectsMultiCarousel;
