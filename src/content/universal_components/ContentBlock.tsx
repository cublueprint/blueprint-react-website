import { ReactNode } from 'react';
import styled from 'styled-components';

interface ContentBlockProps {
  title: string;
  children: ReactNode;
}

const ContentBlock = ({ title, children }: ContentBlockProps) => (
  <ContentBody>
    <ContentTitle>{title}</ContentTitle>
    {children}
  </ContentBody>
);

const ContentTitle = styled.h3`
  color: blue;
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.fonts.heading};
  margin: auto;
  padding: 10px 70px;
  border-radius: 15px;
  width: 80%;
  background-color: ${(props) => props.theme.colors.skyBlue};
`;

const ContentBody = styled.div`
  background-color: ${(props) => props.theme.colors.cloudBlue};
  padding-top: 20px;
`;

export default ContentBlock;
