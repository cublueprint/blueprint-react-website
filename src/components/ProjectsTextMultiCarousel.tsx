import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HomeBlockProps } from '../interfaces/HomeBlockProps';
import ProjectCard from './ProjectTextCard';

import { Splide, SplideSlide, SplideTrack, Options } from '@splidejs/react-splide';
import '@splidejs/react-splide/dist/css/splide.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';


const ProjectsTextMultiCarousel = ({ content }: HomeBlockProps) => {

  const [rerender, setRerender] = useState<boolean>(true);
  const [arrowRemoval, setArrowRemoval] = useState<number>(1);
  const [options, setOptions] = useState<Options>({
    type : 'slide',
    focus  : 'center',
    breakpoints: {
      1200: {
        perPage: 2,
        gap    : 5
      },
      900: {
        perPage: 1,
        gap    : 5,
      },
    },
  });

  useEffect(() => {
    const setBreakpoints = (options: Options): Options => {
      if (content.slider!.length === 1){
        options["perPage"] = 1;
        setArrowRemoval(1);
      } else if (content.slider!.length === 2){
        options["perPage"] = 2;
        setArrowRemoval(2);
      } else {
        options["perPage"] = 3;
        if (content.slider!.length === 3){
          setArrowRemoval(3);
        }
      }

      return options;
    }

    let tempOptions = options;
    const newOptions = setBreakpoints(tempOptions);
    setOptions(newOptions);

    setRerender(false);
  });


  return (
    <HomeProjectsBlockDiv>
      <Title>{content.title.text}</Title>
      {rerender ? 
        <MobileProjects>
          {content.slider!.map((project) => (
              <ProjectCard props={project} />
          ))}
        </MobileProjects>
        :
        <CustomSplide hasTrack={ false } tag={"section"} options={options}>
          <CustomSplideTrack>
            {content.slider!.map((project) => (
              <SplideSlide>
                <ProjectCard props={project} />
              </SplideSlide>
            ))}
          </CustomSplideTrack>

          <div className="splide__arrows">
            <SplideArrow 
                className={`splide__arrow splide__arrow--prev removal-${arrowRemoval}`}
                icon={icon({ name: 'chevron-left'})} 
                color="#3988ff" />
            <SplideArrow 
                className={`splide__arrow splide__arrow--next removal-${arrowRemoval}`}
                icon={icon({ name: 'chevron-right'})} 
                color="#3988ff" />
          </div>
        </CustomSplide>
      }
    </HomeProjectsBlockDiv>
  );
};

const SplideArrow = styled(FontAwesomeIcon)`
  z-index: 0;
  background: none;
  height: 40px;

  &.removal-1 {
    display: none;
  }

  &.removal-2 {
    @media (min-width: 900px) {
      display: none;
    }
  }

  &.removal-3 {
    @media (min-width: 1200px) {
      display: none;
    }
  }
`;

const CustomSplideTrack = styled(SplideTrack)`
  margin: 0 50px;
`;

const CustomSplide = styled(Splide)`
  margin-top: 50px;

  @media (max-width: 768px) {
      display: none;
  }

  .slider-arrow-more-1:disabled {
    opacity: 50%;
  }

  .splide__list {
    margin: 10px !important;
    overflow: visible;
  }

  .splide__pagination {
    padding-top: 50px;
    position: relative;

    &__page {
      background: ${(themeProps) => themeProps.theme.colors.borderBlue};

      &.is-active {
        background: ${(themeProps) => themeProps.theme.colors.primaryBlue};
      }
    }
  }
`;

const MobileProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
  @media ${(props) => `${props.theme.viewport.tablet}`} {
    display: none;
  }
`;

const HomeProjectsBlockDiv = styled.div`
  padding: 50px;
  @media ${(props) => `${props.theme.viewport.monitor}`} {
    width: 72em;
    margin: auto;
  }
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

export default ProjectsTextMultiCarousel;
