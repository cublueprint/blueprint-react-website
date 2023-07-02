import styled from 'styled-components';

interface ContactProps {
    info: {
        email: string;
        social: {
            icon: {
                src: string;
                alt: string;
            };
            link: string;
        }[];
    }
}

const ContactForm = (props: ContactProps) => (
    <ContentDiv>
        <Title>Contact Us</Title>
        <InputContainer>
            <InputField></InputField>
            <InputField></InputField>
            <InputField></InputField>
        </InputContainer>
        <Button>{"Send >"}</Button>
        <p>Email</p>
        <p>{props.info.email}</p>
        <p>Social</p>
        <p>Based In</p>
        <p>Ottawa, Ontario</p>
    </ContentDiv>
);

const ContentDiv = styled.div`
    padding: 50px;
`;

const Title = styled.h1`
  grid-area: Title;
  font-family: ${(props) => props.theme.fonts.heading};
  margin: 0;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
`

const InputField = styled.input`
    type: text;
`

const Button = styled.button`
  color: ${(props) => props.theme.colors.primaryBlue};
  background: ${(props) => props.theme.colors.cloudBlue};
  border: 3px solid ${(props) => props.theme.colors.primaryBlue};
  border-radius: 5px;
  height: 50px;
  width: 150px;
  font-family: ${(props) => props.theme.fonts.content};
  cursor: pointer;
`;

export default ContactForm;