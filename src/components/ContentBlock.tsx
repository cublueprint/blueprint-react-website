import { ReactNode } from 'react';
import styled from 'styled-components';

interface ContentBlockProps {
  title: string;
  background_color?: string;
  children: ReactNode;
}

const ContentBlock = ({ title, children, background_color }: ContentBlockProps) => (
  <ContentBody background_color={background_color}>
    <ContentTitle>{title}</ContentTitle>
    {children}
  </ContentBody>
);

const ContentTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.fonts.heading};
  margin: auto;
  padding: 10px;
  border-radius: 15px;
  width: 80%;
  background-color: ${(props) => props.theme.colors.skyBlue};
`;

interface ContentBodyProps {
  background_color?: string;
}

const ContentBody = styled.div<ContentBodyProps>`
  background-color: ${(props) =>

    props.background_color !== undefined
      ? props.background_color
      : props.theme.colors.cloudBlue};
  padding-top: 20px;
`;

export default ContentBlock;
