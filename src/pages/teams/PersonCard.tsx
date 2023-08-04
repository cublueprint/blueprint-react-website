import styled, { css } from 'styled-components';
import { useState } from 'react';
import FrontPersonCard from './FrontPersonCard';
import BackPersonCard from './BackPersonCard';

import LinkedinLogo from '../../static/images/linkedin-icon.webp';
import InstagramLogo from '../../static/images/ig-icon.webp';
import GitHubLogo from '../../static/images/gh-icon.webp';

export interface PersonProps {
  name: string;
  position: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  picture: string;
  description?: string;
  projects?: string[];
  startDate: string;
}

const PersonCard = (props: PersonProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const cardContent = {
    front: <FrontPersonCard {...props} />,
    back: <BackPersonCard {...props} />,
  }[isHovering ? 'back' : 'front'];

  // mirah was here

  return (
    <Container>
      <CardDiv
        onPointerEnter={() => setIsHovering(true)}
        onPointerLeave={() => setIsHovering(false)}
      >
        {cardContent}
      </CardDiv>
      <Socials>
        {props.linkedin && (
          <a href={props.linkedin} target='_blank' rel='noopener noreferrer'>
            <SocialIcon src={LinkedinLogo} alt='Linkedin Logo' />
          </a>
        )}
        {props.instagram && (
          <a href={props.instagram} target='_blank' rel='noopener noreferrer'>
            <SocialIcon src={InstagramLogo} alt='Instagram Logo' />
          </a>
        )}
        {/* {props.github && (
                <a href={props.github} target="_blank" rel="noopener noreferrer">
                    <SocialIcon src={GitHubLogo} alt="GitHub Logo" />
                </a>
            )} */}
      </Socials>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-width: 250px;
  max-width: 300px;
  @media ${(props) => props.theme.viewport.tablet} {
    width: 250px;
  }
  display: flex;
  flex-direction: column;
`;

const BoxShadow = css`
  box-shadow: -1px 4px 14px -2px rgba(51, 51, 51, 0.66);
  -webkit-box-shadow: -1px 4px 14px -2px rgba(51, 51, 51, 0.66);
  -moz-box-shadow: -1px 4px 14px -2px rgba(51, 51, 51, 0.66);
`;

const Socials = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: -10px;
  padding: 10px 0;
  background-color: white;
  border-radius: 0px 0px 10px 10px;
  ${BoxShadow}
`;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: lightgray;
  :hover,
  :active {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const CardDiv = styled.div`
  border-radius: 10px;
  padding-top: 15px;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: -1px 4px 14px -2px rgba(51, 51, 51, 0.66);
  -webkit-box-shadow: -1px 4px 14px -2px rgba(51, 51, 51, 0.66);
  -moz-box-shadow: -1px 4px 14px -2px rgba(51, 51, 51, 0.66);
  background-color: white;
  :hover,
  :active {
    cursor: pointer;
    box-shadow: -1px 4px 14px -2px rgba(57, 136, 255, 0.66);
    -webkit-box-shadow: -1px 4px 14px -2px rgba(57, 136, 255, 0.66);
    -moz-box-shadow: -1px 4px 14px -2px rgba(57, 136, 255, 0.66);
  }
`;

export default PersonCard;
