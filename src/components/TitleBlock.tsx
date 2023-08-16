import styled from 'styled-components';
import Button from './Button';

interface TitleBlockProps {
  content: {
    title: string;
    subtitle: string;
    image: {
      picture: any;
      alt: string;
    };
    buttons: {
      content: string;
      link: string;
    }[];
  };
}

const TitleBlock = (props: TitleBlockProps) => (
  <TitleBlockDiv>
    <Title>{props.content.title}</Title>
    <Description>{props.content.subtitle}</Description>
    <Image src={props.content.image.picture} alt={props.content.image.alt} />
    {props.content.buttons.map((button) => (
        <Button key={`t-${button.content}`} text={button.content} link={button.link}></Button>
    ))}
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

  @media ${(props) => `${props.theme.viewport.mobile}`} {
    grid-template-columns: 3fr 2fr;
    grid-template-areas:
      'Title Image'
      'Description Image'
      'Button Image';
  }
`;

const Title = styled.h1`
  grid-area: Title;
  font-family: ${(props) => props.theme.fonts.heading};
  margin: 0;
`;

const Description = styled.p`
  grid-area: Description;
  margin: 0;
`;

const Image = styled.img`
  grid-area: Image;
  width: 100%;
  top: 25%;
`;



export default TitleBlock;
