import React from 'react';
import styled from 'styled-components';
import { PersonProps } from './PersonCard';

const FrontPersonCard = (props: PersonProps) => (
  <>
    <Picture src={props.picture} alt={`${props.name}'s profile picture`} />
    <ContentWrapper>
      <Name>{props.name}</Name>
      <Role>{props.position}</Role>
    </ContentWrapper>
  </>
);

const Picture = styled.img`
  width: 80%;
  border-radius: 10px;
  background-color: lightgray;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 40px;
`;

const Name = styled.h2`
  color: ${(props) => props.theme.colors.primaryBlue};
  margin: 0;
`;

const Role = styled.p`
  margin: 20px 0 15px 0;
`;

export default FrontPersonCard;
