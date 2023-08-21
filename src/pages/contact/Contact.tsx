import ContactForm from "./ContactForm";
import BannerBlock from "../../components/BannerBlock";

import styled from 'styled-components';

import content from "../../static/json/contact"

const Contact = () => {
  return (
    <>
      <Container>
        <ContactForm info={content.info}></ContactForm>
      </Container>
      <BannerBlock content={content.banner}></BannerBlock>
    </>
  );
};

const Container = styled.div`
  @media ${(props) => props.theme.viewport.laptop} {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
  }
`

export default Contact;
