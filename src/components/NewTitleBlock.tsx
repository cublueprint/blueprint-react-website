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

const NewTitleBlock = (props: TitleBlockProps) => (
  <Background>
    <TitleBlockDiv>
      <LeftFlex>
        <Title>{props.content.title}</Title>
        <Description>{props.content.subtitle}</Description>
        <ButtonFlex>
          {props.content.buttons.map((button) => (
            <Button key={`t-${button.content}`} text={button.content} link={button.link}/>
          ))}
        </ButtonFlex>
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
  margin-bottom: 0;
  font-size: ${(props) => props.theme.fontSizes.medium2};
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    font-size: ${(props) => props.theme.fontSizes.larger};
  }
`;

const Description = styled.p`
  font-family: ${(props) => props.theme.fonts.content};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-bottom: 50px;
  width: 100%;
  line-height: 2em;
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    font-size: ${(props) => props.theme.fontSizes.small2};
  }
`;

const Image = styled.img`
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    max-width: 30%;
  }
  width: 100%;
`;

const ButtonFlex = styled.div`
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    display:flex;
    justify-content: space-between;
    width: 54%;
  }
  
`;

export default NewTitleBlock;
