import styled from "styled-components";
import Button from "./Button";

interface BannerBlockProps {
    content: {
        text: string;
        button: {
            content: string;
            link: string;
        }
    }
}

const BannerBlock = (props: BannerBlockProps) => (
    <ApplicationDiv>
      <FlexContainer>
        <Text>{props.content.text}</Text>
      </FlexContainer>
      <FlexContainer>
        <a href={props.content.button.link}><Button text={props.content.button.content}></Button></a>
      </FlexContainer>
    </ApplicationDiv>
);

const ApplicationDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10vw;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.offWhite};
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
`;

const Text = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.colors.primaryBlue};
`;


export default BannerBlock;