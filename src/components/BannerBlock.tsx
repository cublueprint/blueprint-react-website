import styled from 'styled-components';
import Button from './Button';
import contactContent from '../static/json/contact';
import aboutContent from '../static/json/about';
import { useLocation } from 'react-router-dom';

type Content = {
  text: string;
  button: {
    content: string;
    link: string;
  };
};

const contentMap: { [key: string]: Content } = {
  contact: contactContent.banner,
  about: aboutContent.banner,
};

const BannerBlock = () => {
  const location = useLocation();
  const currentPage = location.pathname.split('/')[1].toLowerCase();

  const content = contentMap[currentPage];

  if (content) {
    return (
      <ApplicationDiv>
        <FlexContainer>
          <Text>{content.text}</Text>
        </FlexContainer>
        <FlexContainer>
          <Button
            text={content.button.content}
            link={content.button.link}
          ></Button>
        </FlexContainer>
      </ApplicationDiv>
    );
  }

  return null;
};
const ApplicationDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10vw;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.offWhite};
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
`;

const Text = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.colors.primaryBlue};
`;

export default BannerBlock;
