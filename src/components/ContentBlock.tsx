import { ReactNode } from 'react';
import styled from 'styled-components';

interface ContentBlockProps {
  title: string;
  backgroundColour?: string;
  children: ReactNode;
}

const ContentBlock = (props: ContentBlockProps) => (
  <ContentBody backgroundColour={props.backgroundColour}>
    <ContentTitle>{props.title}</ContentTitle>
    <Content>{props.children}</Content>
  </ContentBody>
);

interface ContentBodyProps {
  backgroundColour?: string;
}

const ContentBody = styled.div<ContentBodyProps>`
  background-color: ${(props) =>
    props.backgroundColour
      ? props.backgroundColour
      : props.theme.colors.cloudBlue};
  padding: 50px;
`;

const ContentTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.heading};
  margin: auto;
  padding: 10px 0px;
  border-radius: 15px;
  max-width: 50em;
  background-color: ${(props) => props.theme.colors.skyBlue};
  text-align: center;
  @media ${(props) => props.theme.viewport.laptop} {
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 72em;
  margin-left: auto;
  margin-right: auto;
`;

export default ContentBlock;
