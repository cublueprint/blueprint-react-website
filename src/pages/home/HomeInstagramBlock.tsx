import styled from 'styled-components';
import { HomeBlockProps } from '../../interfaces/HomeBlockProps';

import InstagramCard  from '../../components/InstagramCard';

import { Swiper, SwiperSlide } from 'swiper/swiper-react';
import { Navigation, Pagination } from 'swiper/modules';

// Import IG data
import igdata from '../../static/json/instagram.json'

// Import Swiper styles
import 'swiper/swiper.scss'; // core Swiper
import "swiper/swiper-bundle.css";
import 'swiper/modules/navigation.mjs'; // Navigation module

import '../../static/styles/sliders.css'

const swiperConfig = {
  grabCursor: true,
  navigation: {
    prevEl: '.prev-btn',
    nextEl: '.next-btn'
  },
  rewind: true,
  slidesPerView:4,
  spaceBetween: 30,
  modules:[Navigation],
  className:"instaSwiper"
}
const HomeInstagram = (props: HomeBlockProps) =>{
  // fetch("https://www.instagram.com/cublueprint/?__a=1&__d=1")
  // .then(response => {
  //   console.log(response)
  //   return response.json()
  // })
  // .then(data => {
  //   console.log(data);
  //   data["graphql"]["user"]["edge_owner_to_timeline_media"]["edges"].forEach((edge: any) => {
  //     console.log(edge.node)
  //   }
  //   )
  // }).catch(err=>{
  //   console.log(err)
  // });

  return (
  <HomeInstagramBlockDiv>
    <Title>{props.content.title.text}</Title>
    <div className={"prev-btn swiper-button-prev"}></div>
    <Swiper {...swiperConfig}>
          {igdata.graphql.user.edge_owner_to_timeline_media.edges.map((post) => (
              <SwiperSlide>
                <InstagramCard props={post}/>
              </SwiperSlide>
      ))}
    </Swiper>
    <div className={"next-btn swiper-button-next"}></div>

  </HomeInstagramBlockDiv>
  )
};

const HomeInstagramBlockDiv = styled.div`
  position: relative;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.medium};
  background-color: ${(props) => props.theme.colors.cloudBlue};
  font-family: ${(props) => props.theme.fonts.heading};
  margin: 0;
  margin-bottom: 10px;
  padding-left: 1em;
  height: 1.8em;
  border-radius: 15px;
`;

export default HomeInstagram;