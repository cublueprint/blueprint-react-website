import styled from 'styled-components';
import footerImages from '../../static/json/footer';

const Footer = () => (
  <FooterContainer>
    <FooterGrid>
      <LogoDiv>
        <BlueprintLogo src={footerImages.blueprintIcon} alt='blueprint' />
        <hr />
        <p>Stay in the loop</p>
        {footerImages.social.map((socialLink) => (
          <a
            href={socialLink.url}
            target='_blank'
            rel='noopener noreferrer'
            key={socialLink.key}
          >
            <img src={socialLink.img} alt='icons' />
          </a>
        ))}
        <hr />
      </LogoDiv>

      {footerImages.columns.map((socialLink) => (
        <FooterBox>
          <FooterTitle>{socialLink.title}</FooterTitle>
          <FooterUL>
            {socialLink.lis.map((li) => (
              <li>
                <FooterAnchors href={li.link}>{li.text}</FooterAnchors>
              </li>
            ))}
          </FooterUL>
        </FooterBox>
      ))}
    </FooterGrid>

    <MadeWithLove>Made with ❤️ by The Blueprint Team</MadeWithLove>
  </FooterContainer>
);

const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.darkGrey};
  color: ${(props) => props.theme.colors.offWhite};
  font-family: ${(props) => props.theme.fonts.content};
`;

const FooterGrid = styled.div`
  margin: 20px;
  padding: 25px;
  display: block;

  @media ${(props) => `${props.theme.viewport.tablet}`} {
    display: grid;
    grid-column-gap: 40px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'logoDiv logoDiv';
  }

  @media ${(props) => `${props.theme.viewport.laptop}`} {
    display: grid;
    grid-column-gap: 40px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: 'logoDiv';
  }
`;

const LogoDiv = styled.div`
  grid-area: logoDiv;

  padding: 20px 0;
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    padding: 0;
  }
`;

const FooterBox = styled.div`
  margin: 0;
  font-size: 16px;

  padding: 20px 0;
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    padding: 0;
  }
`;

const FooterTitle = styled.div`
  height: 35px;
`;

const BlueprintLogo = styled.img`
  height: 35px;
`;

const FooterUL = styled.ul`
  list-style: none;
  list-style-position: inside;
  margin: 0;
  padding-left: 0;
  font-weight: 300;
`;

const FooterAnchors = styled.a`
  font-size: 14px;
  font-weight: 300;
  color: white;
  text-decoration: inherit;
`;

const MadeWithLove = styled.div`
  background-color: #2f80ed;
  text-align: center;
  padding: 5px 0;
`;

export default Footer;
