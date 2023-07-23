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
        <FlexContainer>
            <InputContainer>
                <InputField placeholder='Full Name'></InputField>
                <InputField placeholder='Email'></InputField>
                <InputField placeholder='Message'></InputField>
                <Button>{"Send >"}</Button>
            </InputContainer>
            <InfoContainer>
                <BoldText>Email</BoldText>
                <p>{props.info.email}</p>
                <BoldText>Social</BoldText>
                {props.info.social.map((social, index) => (
                    <a href={social.link}><Image src={social.icon.src} alt={social.icon.alt}></Image></a>
                ))}
                <BoldText>Based In</BoldText>
                <p>Ottawa, Ontario</p>
            </InfoContainer>
        </FlexContainer>
    </ContentDiv>
);

const ContentDiv = styled.div`
    padding: 25px 50px;
`;

const Title = styled.h1`
  grid-area: Title;
  font-family: ${(props) => props.theme.fonts.heading};
  margin-bottom: 20px;
`;

const FlexContainer = styled.div`
    display:flex;
    flex-direction: column;
    @media ${(props) => props.theme.viewport.laptop} {
        flex-direction: row;
    }
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    margin: 35px 0px;
`;

const InfoContainer = styled.div`
`;

const BoldText = styled.p`
    font-weight: bold;
    margin: 0px;
`;

const Image = styled.img`
    width: 20px;
    height: auto;
    margin: 15px 10px 15px 0px;
`;

const InputField = styled.input`
    width: 300px;
    type: text;
    border: none;
    border-bottom: 3px solid black;
    padding: 5px 0px;
    margin: 10px 0px;
    font-size: 18px;
    transition: 0.2s ease-out;
    &:focus {
        outline: none;
        width: 350px;
        transition: 0.2s ease-in;
    }
`;

const Button = styled.button`
  color: ${(props) => props.theme.colors.primaryBlue};
  background: ${(props) => props.theme.colors.cloudBlue};
  border: 3px solid ${(props) => props.theme.colors.primaryBlue};
  border-radius: 5px;
  height: 50px;
  width: 150px;
  font-family: ${(props) => props.theme.fonts.content};
  font-weight: bold;
  cursor: pointer;
  margin-top: 50px;
`;

export default ContactForm;