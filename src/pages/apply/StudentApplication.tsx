import styled from 'styled-components';
import { PopupButton } from '@typeform/embed-react';

interface ApplicationTextProps {
  title: string;
  body: string;
  linkText: string;
  id: string;
  last?: boolean;
}

const StudentApplication = ({
  title,
  body,
  linkText,
  id,
  last,
}: ApplicationTextProps) => (
  <Container last={last}>
    <Title>{title}</Title>
    <Body>{body}</Body>
    <CustomPopupButton id={id}>{linkText}</CustomPopupButton>
  </Container>
);

const Container = styled.div<{ last?: boolean }>`
  width: 400px;
  flex-grow: ${(props) => (props.last ? '0' : '1')};
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.primaryBlue};
  font-family: ${(props) => props.theme.fonts.heading};
  margin: 0;
`;

const Body = styled.p``;

const CustomPopupButton = styled(PopupButton)`
  background-color: ${(props) => props.theme.colors.cloudBlue};
  border-radius: 5px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.skyBlue};
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.content};
  padding: 10px 20px;
  color: ${(props) => props.theme.colors.primaryBlue};
  font-weight: 600;
  text-decoration: none;
`;

export default StudentApplication;
