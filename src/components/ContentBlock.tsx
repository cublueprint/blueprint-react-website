import { ReactNode } from 'react';
import styled from 'styled-components';

interface ContentBlockProps {
  title: string;
  backgroundColour?: string;
  children: ReactNode;
  className?: string;
}

const ContentBlock = ({ title, children, backgroundColour, className }: ContentBlockProps) => (
  <ContentBody className={className} backgroundColour={backgroundColour}>
    <ContentTitle>{title}</ContentTitle>
    {children}
  </ContentBody>
);

const ContentTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.heading};
  margin: auto;
  padding: 10px;
  padding-left: 50px;
  border-radius: 15px;
  width: 90%;
  background-color: ${(props) => props.theme.colors.skyBlue};
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
