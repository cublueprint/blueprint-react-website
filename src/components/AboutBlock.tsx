import styled from 'styled-components';
import { HomeBlockProps } from '../interfaces/HomeBlockProps';

const AboutBlock = (props: HomeBlockProps) => {
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
  let AboutBlockDiv = styled.div`
  background-color:${(themeProps) => (props.content.style?.[1] === "cloudBlue"? themeProps.theme.colors.cloudBlue: themeProps.theme.colors.white)}};
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
  }`;

  let Title = styled.h1`
    grid-area: Title;
    text-align: left;
    font-size: ${(themeProps) => themeProps.theme.fontSizes.small};
    background-color: ${(themeProps) => (props.content.title.style === "skyBlue"? themeProps.theme.colors.skyBlue : themeProps.theme.colors.cloudBlue)};
    font-family: ${(themeProps) => themeProps.theme.fonts.heading};
    margin: 0;
    padding-left: 1em;
    height: 1.8em;
    border-radius: 15px;
    @media ${(themeProps) => `${themeProps.theme.viewport.mediumMobile}`} {
      font-size: ${(themeProps) => themeProps.theme.fontSizes.medium};
    }
  `;

  const Buttons = styled.div`
    margin-top: auto;
    margin-bottom: 2em;
    @media ${(themeProps) => `${themeProps.theme.viewport.tablet}`} {
      text-align: ${props.content.style};
    }
  `;
  return <AboutBlockDiv>
    <Title>{props.content.title.text}</Title>
    <Image src={props.content.image.picture} alt={props.content.image.alt} />
    <Description>{props.content.subtitle}</Description>
    <Buttons>
      {props.content.buttons.map((button) => (
        <a key={`t-${button.content}`} href={button.link}>
          <Button>{button.content}</Button>
        </a>
      ))}
    </Buttons>
  </AboutBlockDiv>
};

const Description = styled.div`
  grid-area: Description;
  margin: 0;
  margin-top:auto;
  font-size: ${(props) => props.theme.fontSizes.regular};
`;

const Image = styled.img`
  grid-area: Image;
  width: 100%;
  top: 25%;
`;

const Button = styled.button`
  bottom: 0;
  right: 0;
  grid-area: Button;
  border: 3px solid #0078e8;
  padding: 10px 30px;
  background: rgba(255, 255, 255, 0);
  color: #0078e8;
  margin-right: 20px;
  font-family: ${(props) => props.theme.fonts.content};
  @media ${(props) => `${props.theme.viewport.hover}`} {
    &:hover {
      background: #0078e8;
      color: white;
      cursor: pointer;
      transition: all .6s ease;
      -webkit-transition: all .6s ease;
    }
  }
`;

export default AboutBlock;
