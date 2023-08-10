import styled from 'styled-components';

import { HomeBlockProps } from '../interfaces/HomeBlockProps';


const TitleBlock = (props: HomeBlockProps) => (
  <TitleBlockDiv>
    <Title>{props.content.title.text}</Title>
    <Description>{props.content.subtitle}</Description>
    <Image src={props.content.image.picture} alt={props.content.image.alt} />
    <div>
      {props.content.buttons.map((button) => (
        <a key={`t-${button.content}`} href={button.link}>
          <Button>{button.content}</Button>
        </a>
      ))}
    </div>
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
    'Button';

  @media ${(props) => `${props.theme.viewport.tablet}`} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'Title Image'
      'Description Image'
      'Button Image';
  }
`;

const Title = styled.h1`
  grid-area: Title;
  font-size: ${(props) => props.theme.fontSizes.large};
  font-family: ${(props) => props.theme.fonts.heading};
  margin: 0;
`;

const Description = styled.p`
  grid-area: Description;
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.regular};
  `;

const Image = styled.img`
  grid-area: Image;
  width: 100%;
  top: 25%;
`;

const Button = styled.button`
  grid-area: Button;
  border: 3px solid #0078e8;
  padding: 10px 30px;
  background: rgba(255,255,255,0);
  color: #0078e8;
  margin-right: 20px;
  font-family: ${(props) => props.theme.fonts.content};
  @media ${(props) => `${props.theme.viewport.hover}`} {
    &:hover{
      background: #0078e8;
      color: white;
      cursor:pointer;
      transition: all .6s ease;
      -webkit-transition: all .6s ease;
    }
  }
`;

export default TitleBlock;
