import React from 'react';
import styled from 'styled-components';

import { PersonProps } from './PersonCard';

import LinkedinLogo from '../static/images/linkedin-icon.webp';

const projectColors: { [key: string]: string } = {
  Beneficent: '#ff9800',
  'Urban Minds': '#2196f3',
  'Allo Canada': '#4caf50',
};

const createColoredBadge = (projectName: string) => {
  return <Badge projectName={projectName}>{projectName}</Badge>;
};

const BackPersonCard = (props: PersonProps) => (
  <Container>
    <Name>{props.name}</Name>
    <Description>{props.description}</Description>
    <InfoSection>
      {props.projects && (
        <>
          <InfoTitle>Projects</InfoTitle>
          <Projects>
            {props.projects.map((project) => createColoredBadge(project))}
          </Projects>
        </>
      )}
      <MemberSince>
        <InfoTitle>Member Since</InfoTitle>
        <p>{props.startDate}</p>
      </MemberSince>
    </InfoSection>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  height: 100%;
`;

const Name = styled.h2`
  color: ${(props) => props.theme.colors.primaryBlue};
`;

const Description = styled.p`
  margin: 0 0 10px 0;
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: 20px;
`;

const InfoTitle = styled.h4`
  color: ${(props) => props.theme.colors.primaryBlue};
  margin: 10px 0;
`;

const Projects = styled.div`
  display: flex;
  gap: 10px;
  margin: 0;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

interface BadgeProps {
  projectName: string;
}

const Badge = styled.span<BadgeProps>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background-color: ${(props) => projectColors[props.projectName] || '#888'};
  color: #ffffff;
  font-weight: bold;
  font-size: 0.8rem;
`;

const MemberSince = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default BackPersonCard;
