import React from 'react';
import styled from 'styled-components';

import { PersonProps } from './PersonCard';

import LinkedinLogo from '../../static/images/linkedin.svg';
import InstagramLogo from '../../static/images/instagram.svg';
import GithubLogo from '../../static/images/github.svg';

const projectColors: { [key: string]: string } = {
  Beneficent: '#ff9800',
  'Urban Minds': '#2196f3',
  'Allo Canada': '#4caf50',
  Website: '#f44336',
};

const createColoredBadge = (projectName: string) => {
  return <Badge projectName={projectName}>{projectName}</Badge>;
};

const Projects = (projects: string[]) => (
  <>
    <SectionTitle>Projects</SectionTitle>
    <ProjectsContainer>
      {projects.map((project) => createColoredBadge(project))}
    </ProjectsContainer>
  </>
);

const SocialIconButton = (href: string, src: string, alt: string) => (
  <a href={href} target='_blank' rel='noopener noreferrer'>
    <SocialIcon src={src} alt={alt} />
  </a>
);


const BackPersonCard = (props: PersonProps) => (
  <Container>
    <Name>{props.name}</Name>
    <Description>{props.description}</Description>
    {props.projects && Projects(props.projects)}
    <DateJoinedSection>
      <SectionTitle>Member Since</SectionTitle>
      <p>{props.startDate}</p>
    </DateJoinedSection>
    <Socials>
      {props.linkedin && SocialIconButton(props.linkedin, LinkedinLogo, 'LinkedIn logo, links to LinkedIn profile')}
      {props.github && SocialIconButton(props.github, GithubLogo, 'Github logo, links to Github profile')}
      {props.instagram && SocialIconButton(props.instagram, InstagramLogo, 'Instagram logo, links to Instagram profile')}
    </Socials>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  height: 100%;
  pointer: cursor;
`;

const Name = styled.h2`
  color: ${(props) => props.theme.colors.primaryBlue};
`;

const Description = styled.p`
  margin: 0 0 10px 0;
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const DateJoinedSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle = styled.h4`
  color: ${(props) => props.theme.colors.primaryBlue};
  margin: 10px 0;
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px 10px 0px;
  gap: 10px;
  width: 100%;
`;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  :hover,
  :active {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

interface BadgeProps {
  projectName: string;
}

const Badge = styled.span<BadgeProps>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  border: 2px solid;
  border-color: ${(props) => projectColors[props.projectName] || '#888'};
  color: black;
  font-weight: bold;
  font-size: 0.8rem;
  width: fit-content;
  margin: 0 5px 5px 0;
`;

export default BackPersonCard;
