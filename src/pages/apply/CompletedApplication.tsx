import styled from 'styled-components';

interface CompletedApplicationProps {
  title: string;
  body: string;
  url: string;
  linkText: string;
}

const CompletedApplication = ({
  title,
  body,
  url,
  linkText,
}: CompletedApplicationProps) => (
  <Container>
    <Title>{title}</Title>
    <Body>{body}</Body>
    <Link href={url}>{linkText}</Link>
  </Container>
);

const Container = styled.div`
  width: 40vw;
  background: ${(props) => props.theme.colors.primaryBlue};
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  & > * {
    /* margin: 0; */
  }
`;

const Title = styled.h2`
  margin: 0;
  color: white;
  font-family: ${(props) => props.theme.fonts.heading};
  font-style: bold;
`;

const Body = styled.p``;

const Link = styled.a`
  color: white;
  font-style: bold;
  text-decoration: none;
`;

export default CompletedApplication;
