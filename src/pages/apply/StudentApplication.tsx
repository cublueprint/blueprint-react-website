import styled from 'styled-components';
import { PopupButton } from '@typeform/embed-react';

interface ApplicationTextProps {
  title: string;
  body: string;
  linkText: string;
  url?: string;
  id?: string;
  last?: boolean;
}

const StudentApplication = ({
  title,
  body,
  linkText,
  url,
  id,
  last,
}: ApplicationTextProps) => (
  <Container last={last}>
    <Title>{title}</Title>
    <Body>{body}</Body>
    {url && <Link href={url}>{linkText}</Link>}
    {id && <CustomPopupButton id={id}>{linkText}</CustomPopupButton>}
  </Container>
);

const Container = styled.div<{ last?: boolean }>`
  width: 400px;
  flex-grow: ${(props) => (props.last ? '0' : '1')};
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.primaryBlue};
  font-family: ${(props) => props.theme.fonts.heading};
  font-style: bold;
  margin: 0;
`;

const Body = styled.p``;

const Link = styled.a`
  color: ${(props) => props.theme.colors.primaryBlue};
  font-style: bold;
  text-decoration: none;
`;

const CustomPopupButton = styled(PopupButton)`
  background-color: transparent;
  border: none;
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.content};
  padding: 0;
  color: ${(props) => props.theme.colors.primaryBlue};
  font-weight: 700;
  text-decoration: none;
`;

export default StudentApplication;
