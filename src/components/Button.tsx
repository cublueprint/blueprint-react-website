import styled from "styled-components";

interface ButtonProps {
    text: string;
    className?: string;
}

const Button = (props: ButtonProps) => (
    <BlueprintButton className={props.className}>{props.text}</BlueprintButton>
);

const BlueprintButton = styled.button`
  color: ${(props) => props.theme.colors.primaryBlue};
  background: ${(props) => props.theme.colors.cloudBlue};
  border: 3px solid ${(props) => props.theme.colors.primaryBlue};
  border-radius: 5px;
  height: 50px;
  width: 150px;
  font-family: ${(props) => props.theme.fonts.content};
  font-weight: bold;
  cursor: pointer;
`;

export default Button;