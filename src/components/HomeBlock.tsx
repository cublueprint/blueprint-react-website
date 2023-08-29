import styled from 'styled-components';
import { HomeBlockProps } from '../interfaces/HomeBlockProps';
import Button from './Button';

const HomeBlock = (props: HomeBlockProps) => {
  let Background = styled.div`
    background-color:${(themeProps) => (props.content.style?.[1] === "cloudBlue"? themeProps.theme.colors.cloudBlue: themeProps.theme.colors.white)}};
  `;
  let styling = (props.content.style?.[0] === "right")? `    
  text-align: right;
  grid-template-columns: 2fr 3fr;
  grid-template-areas:
    'Title Title'
    'Image Description'
    'Image Buttons';
  ` :
  `    
  text-align: left;
  grid-template-columns: 3fr 2fr;
  grid-template-areas:
    'Title Title'
    'Description Image'
    'Buttons Image';
  `
  let HomeBlockDiv = styled.div`
  padding: 50px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-areas:
    'Title'
    'Description'
    'Image'
    'Buttons';

  @media ${(themeProps) => `${themeProps.theme.viewport.tablet}`} {
    ${styling}
  }
  @media ${(props) => `${props.theme.viewport.monitor}`} {
    width: 72em;
    margin: auto;
  }
  `;

  let Title = styled.h1`
    grid-area: Title;
    font-size: ${(themeProps) => themeProps.theme.fontSizes.small};
    background-color: ${(themeProps) => (props.content.title.style === "skyBlue"? themeProps.theme.colors.skyBlue : themeProps.theme.colors.cloudBlue)};
    font-family: ${(themeProps) => themeProps.theme.fonts.heading};
    margin: 0;
    padding: 10px 0px;
    height: 1.8em;
    width: 100%;
    border-radius: 15px;
    text-align: center;
    @media ${(themeProps) => `${themeProps.theme.viewport.mediumMobile}`} {
      font-size: ${(themeProps) => themeProps.theme.fontSizes.regular};
    }
    @media ${(themeProps) => `${themeProps.theme.viewport.tablet}`} {
      text-align: left;
      margin-left: auto;
      margin-right: auto;
      padding-left: 40px;
    }
  `;

  const Buttons = styled.div`
    margin: auto;
    margin-bottom: 2em;
    @media ${(themeProps) => `${themeProps.theme.viewport.tablet}`} {
      margin-${props.content.style?props.content.style[0]:"left"}: 0;
    }
  `;
  return <Background>
  <HomeBlockDiv>
    <Title>{props.content.title.text}</Title>
    <Image src={props.content.image.picture} alt={props.content.image.alt} />
    <Description>{props.content.subtitle}</Description>
    <Buttons>
      {props.content.buttons.map((button) => (
        <Button key={`t-${button.content}`} link={button.link} text={button.content}></Button>
      ))}
    </Buttons>
  </HomeBlockDiv>
  </Background>
};

const Description = styled.div`
  grid-area: Description;
  margin: 0;
  margin-top:auto;
  font-size: ${(props) => props.theme.fontSizes.small};
  @media ${(themeProps) => `${themeProps.theme.viewport.mediumMobile}`} {
    font-size: ${(themeProps) => themeProps.theme.fontSizes.regular};
  }
`;

const Image = styled.img`
  grid-area: Image;
  width: 100%;
  top: 25%;
`;

export default HomeBlock;
