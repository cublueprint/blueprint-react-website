import styled from 'styled-components';
import blueprintIcon from '../../static/images/blueprint.png';
import ApplicationText from './ApplicationText';

const Apply = () => {
  return (
    <Container>
      <TitleContainer>
        <StyledBlueprintImage alt='Blueprint' src={blueprintIcon} />
        <Title>blueprint</Title>
        <Subtitle>Come work with us!</Subtitle>
      </TitleContainer>

      <BodyContainer>
        <h2>I am a:</h2>
        <ApplicationTextContainer>
          <ApplicationText
            title={'Non Profit'}
            body={
              'Looking for a group of slick, volunteer student developers to help with my software needs'
            }
            url={'#'}
            linkText={'Learn more!'}
          />
          <ApplicationText
            title={'Student'}
            body={
              'Looking to develop my skills and contribute to my community with like-minded nerds lmao'
            }
            url={'#'}
            linkText={'Learn more!'}
          />
        </ApplicationTextContainer>
      </BodyContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  width: 80vw;
  padding: 50px 0;
`;

const TitleContainer = styled.div`
  display: grid;
  grid-template-areas:
    'Logo Title'
    'Logo Subtitle';
`;

const StyledBlueprintImage = styled.img`
  grid-area: Logo;
  max-width: 150px;
  margin-left: 4vw;
  height: 100%;
`;

const Title = styled.h1`
  grid-area: Title;
  margin: 0;
  color: ${(props) => props.theme.colors.primaryBlue};
  font-family: ${(props) => props.theme.fonts.heading};
  font-style: bold;
  font-size: 10vw;
`;

const Subtitle = styled.p`
  grid-area: Subtitle;
  margin: 0;
`;

const BodyContainer = styled.div`
  padding: 5vh 0;
`;

const ApplicationTextContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Apply;
