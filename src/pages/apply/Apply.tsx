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
            url={'apply/non-profit'}
            linkText={'Learn more!'}
          />
          <ApplicationText
            title={'Student'}
            body={
              'Looking to develop my skills and contribute to my community with like-minded peers'
            }
            url={'apply/student'}
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
  grid-gap: 0 2vw;
  grid-template-columns: 20vw 58vw;
  grid-template-rows: 80% 20%;
  @media ${(props) => props.theme.viewport.mobile} {
  }

  @media ${(props) => props.theme.viewport.tablet} {
  }

  @media ${(props) => props.theme.viewport.laptop} {
  }
`;

const StyledBlueprintImage = styled.img`
  grid-area: Logo;
  padding-top: 10%;
  height: auto;
  width: 100%;
`;

const Title = styled.h1`
  grid-area: Title;
  margin: 0;
  color: ${(props) => props.theme.colors.primaryBlue};
  font-family: ${(props) => props.theme.fonts.heading};
  font-style: bold;
  font-size: 13vw;
`;

const Subtitle = styled.p`
  grid-area: Subtitle;
  margin: 0;
  font-size: 3vw;
`;

const BodyContainer = styled.div`
  padding: 5vh 0;
`;

const ApplicationTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export default Apply;
