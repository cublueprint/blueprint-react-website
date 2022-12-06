import styled from 'styled-components';
import ProjectCard from '../../components/ProjectCard';
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

interface ProjectList {
  props: {
    name: string;
    picture: any;
    description: string;
  }[];
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

const ProjectDisplay = ({ props }: ProjectList) => (
  <CarouselWrapper>
    {props.length < 1 && <div>Coming soon...</div>}
    {props.length === 1 &&
      props.map((project) => <ProjectCard props={project} />)}
    {props.length > 1 && (
      <Carousel breakpoints={create_breakpoints_list(props.length)}>
        {props.map((project) => (
          <ProjectCard props={project} />
        ))}
      </Carousel>
    )}
  </CarouselWrapper>
);

const CarouselWrapper = styled.div`
  padding: 50px;
`;

export default ProjectDisplay;
