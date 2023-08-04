import styled, { css } from 'styled-components';
import { useState } from 'react';
import FrontPersonCard from './FrontPersonCard';
import BackPersonCard from './BackPersonCard';

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
  const [toggle, setToggle] = useState(false);

  const content = {
    front: <FrontPersonCard {...props} />,
    back: <BackPersonCard {...props} />,
  }[toggle ? 'back' : 'front'];

  // mirah was here

  return (
    <Container>
      <CardDiv onClick={() => setToggle(!toggle)}>{content}</CardDiv>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 260px;
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
