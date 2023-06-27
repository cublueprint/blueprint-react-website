import styled from 'styled-components';
import { PopupButton } from '@typeform/embed-react';
import { useNavigate } from 'react-router-dom';

interface ApplicationTextProps {
  title: string;
  body: string;
  linkText: string;
  url: string;
  id?: string;
}

const ApplyOptions = ({
  title,
  body,
  linkText,
  url,
  id
}: ApplicationTextProps) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/${url}`);

  return (
    <Container onClick={handleClick}>
      <Title>{title}</Title>
      <Body>{body}</Body>
      {url && <Link href={url}>{linkText}</Link>}
      {id && <CustomPopupButton id={id}>{linkText}</CustomPopupButton>}
    </Container>
  );
};

const Container = styled.div<{ last?: boolean }>`
  width: 400px;
  flex-grow: ${(props) => (props.last ? '0' : '1')};
  border: 1px solid ${(props) => props.theme.colors.primaryBlue};
  border-radius: 10px;
  padding: 20px;
  :hover {
    -webkit-box-shadow: 2px 5px 18px 0px
      ${(props) => props.theme.colors.primaryBlue}80;
    box-shadow: 2px 5px 18px 0px ${(props) => props.theme.colors.primaryBlue}80;
  }
  transition: 0.3s;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.primaryBlue};
  font-family: ${(props) => props.theme.fonts.heading};
  font-style: bold;
  font-size: 36px;
  margin: 0;
`;

const Body = styled.p`
  margin-top: 0;
`;

const Link = styled.a`
  color: ${(props) => props.theme.colors.primaryBlue};
  font-weight: 800;
  text-decoration: none;
`;

const CustomPopupButton = styled(PopupButton)`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.content};
  padding: 0;
  color: ${(props) => props.theme.colors.primaryBlue};
  font-weight: 800px;
  text-decoration: none;
`;

export default ApplyOptions;
