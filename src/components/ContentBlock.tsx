import { ReactNode } from 'react';
import styled from 'styled-components';

interface ContentBlockProps {
  title: string;
  backgroundColour?: string;
  children: ReactNode;
}

const ContentBlock = ({ title, children, backgroundColour }: ContentBlockProps) => (
  <ContentBody backgroundColour={backgroundColour}>
    <ContentTitle>{title}</ContentTitle>
    {children}
  </ContentBody>
);

const ContentTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.heading};
  margin: auto;
  padding: 10px 0px 10px 40px;
  border-radius: 15px;
  width: 50%;
  background-color: ${(props) => props.theme.colors.skyBlue};
  text-align: center;
  @media ${(props) => props.theme.viewport.laptop} {
    text-align: left;
  }
`;

interface ContentBodyProps {
  backgroundColour?: string;
}

const ContentBody = styled.div<ContentBodyProps>`
  background-color: ${(props) => 
    props.backgroundColour ? props.backgroundColour : props.theme.colors.cloudBlue
  };
  padding-top: 20px;
`;

export default ContentBlock;
