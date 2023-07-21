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
        className:"mySwiper"
}
const HomeProjectsBlock = (props: HomeBlockProps) => (
  <HomeProjectsBlockDiv>
    <Title>{props.content.title}</Title>
    <Swiper {...swiperConfig}>
          {props.content.projects?.map((project) => (
              <SwiperSlide>
                <ProjectCard props={project}/>
              </SwiperSlide>
      ))}
      </Swiper>

  </HomeProjectsBlockDiv>
);

const HomeProjectsBlockDiv = styled.div`
  padding: 50px;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.medium};
  background-color: ${(props) => props.theme.colors.skyBlue};
  font-family: ${(props) => props.theme.fonts.heading};
  margin: 0;
  margin-bottom: 10px;
  padding-left: 1em;
  height: 1.8em;
  border-radius: 15px;
`;

const Description = styled.div`
  margin: 0;
  margin-top:auto;
  font-size: ${(props) => props.theme.fontSizes.regular};
  @media ${(props) => `${props.theme.viewport.tablet}`} {
    text-align: right;
  }
`;

const Buttons = styled.div`
  margin-bottom: 2em;
  @media ${(props) => `${props.theme.viewport.tablet}`} {
    text-align: right;
  }
`

const Image = styled.img`
  width: 100%;
  top: 25%;
`;

const Button = styled.button`
  bottom: 0;
  right: 0;
  border: 3px solid #0078e8;
  padding: 10px 30px;
  background: rgba(255, 255, 255, 0);
  color: #0078e8;
  margin-right: 20px;
  font-family: ${(props) => props.theme.fonts.content};
  &:hover {
    background: #0078e8;
    color: white;
    cursor: pointer;
  }
`;

export default HomeProjectsBlock;