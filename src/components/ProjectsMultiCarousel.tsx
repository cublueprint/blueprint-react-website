import styled from 'styled-components';
import { HomeBlockProps } from '../interfaces/HomeBlockProps';
import ProjectCard from './ProjectTextCard';
import Carousel from 'styled-components-carousel';

interface Breakpoint {
  size: number;
  settings: {
    slidesToShow: number;
    showArrows?: boolean;
    showIndicator?: boolean;
    swipeable?: boolean;
    center?: boolean;
  };
}

function create_breakpoints_list(carousel_length: number): Array<Breakpoint> {
  /**
   * Returns a different breakpoint list depending on the number of items in the carousel
   *
   * @param carousel_length - number of items in the carousel
   */
  var breakpoints: Array<Breakpoint> = [
    {
      size: 400,
      settings: {
        slidesToShow: 1,
        showArrows: true,
        showIndicator: false,
        swipeable: true,
        center: true,
      },
    },
    {
      size: 800,
      settings: {
        slidesToShow: 2,
        showArrows: carousel_length === 2 ? false : true,
        swipeable: true,
      },
    },
  ];
  var third_breakpoint = {
    size: 1100,
    settings: {
      slidesToShow: 3,
      showArrows: carousel_length === 3 ? false : true,
      swipeable: true,
    },
  };
  if (carousel_length >= 3) breakpoints.push(third_breakpoint);
  return breakpoints;
}

const ProjectsMultiCarousel = ({ content }: HomeBlockProps) => {
  return (
    <HomeProjectsBlockDiv>
      <Title>{content.title.text}</Title>
      <CarouselWrapper>
        {content.slider!.length < 1 && <div>Coming soon...</div>}
        {content.slider!.length === 1 &&
          content.slider!.map((project) => <ProjectCard props={project} />)}
        {content.slider!.length > 1 && (
          <Carousel
            breakpoints={create_breakpoints_list(content.slider!.length)}
          >
            {content.slider!.map((project) => (
              <ProjectCard props={project} />
            ))}
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
