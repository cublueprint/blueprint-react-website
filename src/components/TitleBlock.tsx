import styled from 'styled-components';

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
      <a key={`t-${button.content}`} href={button.link}>
        <Button>{button.content}</Button>
      </a>
    ))}
  </TitleBlockDiv>
);

const TitleBlockDiv = styled.div`
  padding: 50px 120px;
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
  font-size: ${(props) => props.theme.fontSizes.larger};
`;

const Description = styled.p`
  grid-area: Description;
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const Image = styled.img`
  grid-area: Image;
  width: 80%;
  margin-top: 20px;
`;

const Button = styled.button`
  grid-area: Button;
  background: rgba(147, 201, 254, 1);
  border: 3px solid #0078e8;
  border-radius: 5px;
  padding: 10px 30px;
  font-family: ${(props) => props.theme.fonts.content};
`;

export default TitleBlock;
