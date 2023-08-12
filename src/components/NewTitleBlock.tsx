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

const NewTitleBlock = (props: TitleBlockProps) => (
  <TitleBlockDiv>
    <LeftFlex>
        <Title>{props.content.title}</Title>
        <Description>{props.content.subtitle}</Description>
        {props.content.buttons.map((button) => (
        <a key={`t-${button.content}`} href={button.link}>
            <Button>{button.content}</Button>
        </a>
        ))}
    </LeftFlex>
    <Image src={props.content.image.picture} alt={props.content.image.alt} />
  </TitleBlockDiv>
);

const TitleBlockDiv = styled.div`
  @media ${(props) => props.theme.viewport.laptop} {
    justify-content: center;
    flex-direction: row;
  }
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 50px;
`;

const LeftFlex = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    flex-basis: 0;
    flex-grow: 0.5;
  }
`

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  margin-bottom: 30px;
`;

const Description = styled.p`
  margin-bottom: 50px;
  width: 70%;
`;

const Image = styled.img`
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    width: 30%;
  }
  width: 70%;
`;

const Button = styled.button`
  background: rgba(147, 201, 254, 1);
  border: 3px solid #0078e8;
  border-radius: 5px;
  padding: 10px 30px;
  font-family: ${(props) => props.theme.fonts.content};
`;

export default NewTitleBlock;
