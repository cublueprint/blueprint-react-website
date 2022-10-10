import styled from 'styled-components';
import { ReactNode } from 'react';
import { PersonCard } from './PersonCard';

interface ContentBlockProps {
  title: string;
  children: string[];
}

const ContentBlock = ({ title, children }: ContentBlockProps) => (
  <ContentBody>
    <ContentTitle>{title}</ContentTitle>
    {children.map((person, index) => (
      <div>hello</div>
    ))}
  </ContentBody>
);

const ContentTitle = styled.h3`
  color: blue;
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.fonts.heading};
  margin: 20px;
  padding: 10px 70px;
  border-radius: 15px;
  width: 80%;
  background-color: ${(props) => props.theme.colors.skyBlue};
`;

const ContentBody = styled.div`
  background-color: ${(props) => props.theme.colors.cloudBlue};
`;

export default ContentBlock;
