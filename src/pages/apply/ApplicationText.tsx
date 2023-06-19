import styled from 'styled-components';

interface ApplicationTextProps {
  title: string;
  body: string;
  url: string;
  linkText: string;
  last?: boolean;
}

const ApplicationText = ({
  title,
  body,
  url,
  linkText,
  last,
}: ApplicationTextProps) => (
  <Container last={last}>
    <Title>{title}</Title>
    <Body>{body}</Body>
    <Link href={url}>{linkText}</Link>
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

export default ApplicationText;
