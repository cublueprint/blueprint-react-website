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
  <Background>
    <TitleBlockDiv>
      <LeftFlex>
        <Title>{props.content.title}</Title>
        <Description>{props.content.subtitle}</Description>
        {props.content.buttons.map((button) => (
          <Button key={`t-${button.content}`} href={button.link}>
            {button.content}
          </Button>
        ))}
      </LeftFlex>
      <Image src={props.content.image.picture} alt={props.content.image.alt} />
    </TitleBlockDiv>
  </Background>
);

const Background = styled.div`
  background-color: ${(props) => props.theme.colors.lightBlue};
`;

const TitleBlockDiv = styled.div`
  @media ${(props) => props.theme.viewport.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 50px 50px 100px 50px;
  max-width: 72em;
  margin-left: auto;
  margin-right: auto;
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
  }
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.larger};
  margin-bottom: 0;
`;

const Description = styled.p`
  font-size: 1.1em;
  margin-bottom: 50px;
  width: 70%;
  line-height: 2em;
`;

const Image = styled.img`
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    max-width: 30%;
  }
  width: 70%;
`;

const Button = styled.a`
  background: ${(props) => props.theme.colors.offWhite};
  border: 2px solid ${(props) => props.theme.colors.primaryBlue};
  border-radius: 5px;
  padding: 10px 30px;
  font-size: 1.1em;
  font-family: ${(props) => props.theme.fonts.content};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 200px;
  height: 30px;
  color: ${(props) => props.theme.colors.primaryBlue};
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  ::after {
    content: '>';
  }
`;

export default NewTitleBlock;
