import styled from 'styled-components';
import Button from './Button';

import { HomeBlockProps } from '../interfaces/HomeBlockProps';

const TitleBlock = (props: HomeBlockProps) => (
  <TitleBlockDiv>
    <Title>{props.content.title.text}</Title>
    <Description>{props.content.subtitle}</Description>
    {props.content.image.border ?
      <PictureWrapper>
        <Picture src={props.content.image.picture} alt={props.content.image.alt} />
      </PictureWrapper>
      :
      <Image src={props.content.image.picture} alt={props.content.image.alt} />
    }
    <Buttons>
      {props.content.buttons.map((button) => (
        <Button
          key={`t-${button.content}`}
          link={button.link}
          text={button.content}
        />
      ))}
    </Buttons>
  </TitleBlockDiv>
);

const TitleBlockDiv = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    text-align: left;
    grid-template-areas:
      'Title Image'
      'Description Image'
      'Buttons Image';
  }
  @media ${(props) => `${props.theme.viewport.monitor}`} {
    width: 72em;
  }
`;

const PictureWrapper = styled.div`
  grid-area: Image;
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  border: ${(props) => props.theme.colors.cloudBlue} 20px solid;
  background-color: white;
  margin: auto;
  padding: 3vw;

  @media ${(props) => `${props.theme.viewport.laptop}`} {
    padding: 0;
  }
`;

const Picture = styled.img`
  width: 80%;
  margin: auto;
  display: block;
`;

const Image = styled.img`
  grid-area: Image;
  width: 100%;
  top: 25%;
`;

const Buttons = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2vw;
  gap: 10px;
  @media ${(props) => `${props.theme.viewport.widerMobile}`} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
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

export default TitleBlock;
