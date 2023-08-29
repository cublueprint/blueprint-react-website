import styled from 'styled-components';
import Button from './Button';

import { HomeBlockProps } from '../interfaces/HomeBlockProps';


const TitleBlock = (props: HomeBlockProps) => (
  <TitleBlockDiv>
    <Title>{props.content.title.text}</Title>
    <Description>{props.content.subtitle}</Description>
    <Image src={props.content.image.picture} alt={props.content.image.alt} />
    <Buttons>
      {props.content.buttons.map((button) => (
        <Button key={`t-${button.content}`} link={button.link} text={button.content}></Button>
      ))}
    </Buttons>
  </TitleBlockDiv>
);

const TitleBlockDiv = styled.div`

  padding: 50px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-areas:
    'Title'
    'Description'
    'Image'
    'Buttons';

  @media ${(props) => `${props.theme.viewport.laptop}`} {
    margin: auto;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    grid-template-areas:
      'Title Image'
      'Description Image'
      'Buttons Image';
  }
  @media ${(props) => `${props.theme.viewport.monitor}`} {
    width: 72em;
  }
`;

const Buttons = styled.div`
  margin: auto;
  margin-bottom: 2em;
  @media ${(props) => `${props.theme.viewport.widerMobile}`} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    margin-left: 0;
  }
`;

const Title = styled.h1`
  grid-area: Title;
  font-size: ${(props) => props.theme.fontSizes.larger};
  font-family: ${(props) => props.theme.fonts.heading};
  margin: 0;
`;

const Description = styled.p`
  grid-area: Description;
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.small};
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    font-size: ${(props) => props.theme.fontSizes.small2};
  }
  `;

const Image = styled.img`
  grid-area: Image;
  width: 100%;
  top: 25%;
`;

export default TitleBlock;
