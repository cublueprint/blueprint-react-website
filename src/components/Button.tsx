
import styled from "styled-components";

interface ButtonProps {
    text: string;
    link?: string;
    className?: string;
}

const Button = (props: ButtonProps) => (
    <StyledA href={props.link}><BlueprintButton className={props.className}>{props.text}</BlueprintButton></StyledA>
);

const StyledA = styled.a`
  text-decoration: none;
`

const BlueprintButton = styled.button`
  background: ${(props) => props.theme.colors.lightBlue};
  border: 4px solid ${(props) => props.theme.colors.primaryBlue};
  border-radius: 5px;
  padding: 10px 30px;
  font-size: 1.1em;
  font-family: ${(props) => props.theme.fonts.heading};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 200px;
  height: 60px;
  color: ${(props) => props.theme.colors.primaryBlue};
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.2s ease-in-out;
  ::after {
    content: '>';
  }
  :hover {
    background: ${(props) => props.theme.colors.primaryBlue};
    color: ${(props) => props.theme.colors.lightBlue};
    transition: 0.2s ease-in-out;
  }
`;


export default Button;