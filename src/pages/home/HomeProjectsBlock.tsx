import styled from 'styled-components';
import { HomeBlockProps } from '../../interfaces/HomeBlockProps';

import ProjectCard  from '../../components/ProjectCard';

import { Swiper, SwiperSlide } from 'swiper/swiper-react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper.scss'; // core Swiper
import "swiper/swiper-bundle.css";
import 'swiper/modules/navigation.mjs'; // Navigation module
import 'swiper/modules/pagination.mjs'; // Pagination module
import 'swiper/modules/effect-coverflow.min.mjs'

import '../../static/styles/home-projects-slider.css'
import '../../static/styles/sliders.css'

const swiperConfig = {
  effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        navigation: true,
        slidesPerView:3,
        coverflowEffect:{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination:{
          clickable:true
        },
        modules:[EffectCoverflow, Navigation, Pagination],
        className:"projectsSwiper"
}
const HomeProjectsBlock = (props: HomeBlockProps) => (
  <HomeProjectsBlockDiv>
    <Title>{props.content.title.text}</Title>
    <Carousel>
      <Swiper {...swiperConfig}>
            {props.content.slider?.map((project) => (
                  <SwiperSlide key={project.name}>
                    <a href={project.link} style={{textDecoration: "inherit", color: "inherit", cursor: "unset"}}>
                      <ProjectCard props={project}/>
                    </a>
                  </SwiperSlide>
        ))}
      </Swiper>
    </Carousel>
    <MobileProjects>
      {props.content.slider?.map((project) => (
          <a href={project.link} style={{textDecoration: "inherit", color: "inherit"}}>
            <ProjectCard props={project}/>
          </a>
        ))}
    </MobileProjects>

  </HomeProjectsBlockDiv>
);

const HomeProjectsBlockDiv = styled.div`
  padding: 50px;
`;

const Carousel = styled.div`
  display: none;
  @media ${(props) => `${props.theme.viewport.tablet}`} {
    display: inherit;
  }
`

const MobileProjects = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  @media ${(props) => `${props.theme.viewport.tablet}`} {
    display: none;
  }
  @media ${(props) => `${props.theme.viewport.widerMobile}`} {
    grid-template-columns: 1fr 1fr;
  }
`

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.small};
  background-color: ${(props) => props.theme.colors.cloudBlue};
  font-family: ${(props) => props.theme.fonts.heading};
  margin: 0;
  margin-bottom: 10px;
  padding-left: 1em;
  height: 1.8em;
  border-radius: 15px;
  @media ${(themeProps) => `${themeProps.theme.viewport.mediumMobile}`} {
    font-size: ${(themeProps) => themeProps.theme.fontSizes.medium};
  }
`;

export default HomeProjectsBlock;