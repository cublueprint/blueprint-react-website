import styled from "styled-components";

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
        <Button onClick={() => {}}>{props.content.button.content}</Button>
      </FlexContainer>
    </ApplicationDiv>
);

const ApplicationDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10vw;
  background-color: ${(props) => props.theme.colors.offWhite};
`;

const FlexContainer = styled.div`
  width: 25vw;
  height: 100px;
`;

const Text = styled.h3`
  margin-top: 35px;
  text-align: right;
  color: ${(props) => props.theme.colors.primaryBlue};
`;

const Button = styled.button`
  color: ${(props) => props.theme.colors.primaryBlue};
  background: ${(props) => props.theme.colors.cloudBlue};
  border: 3px solid ${(props) => props.theme.colors.primaryBlue};
  border-radius: 5px;
  margin-top: 25px;
  height: 50px;
  width: 150px;
  font-family: ${(props) => props.theme.fonts.content};
`;

export default BannerBlock;