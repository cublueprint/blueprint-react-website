import styled from 'styled-components';
import content from '../../static/json/footer';

const Footer = () => (
  <FooterContainer>
    <FlexContainer>
        <Column>
          {content.links.slice(0, 3).map((link) => (
            <a href={link.link}><FooterTitle>{link.name}</FooterTitle></a>
          ))}
        </Column>
        <Column>
          {content.links.slice(3).map((link) => (
            <a href={link.link}><FooterTitle>{link.name}</FooterTitle></a>
          ))}
        </Column>
        <Column>
          <BlueprintLogo src={content.blueprintIcon} alt='blueprint' />
          <p>stay in the loop</p>
          {content.social.map((socialLink) => (
            <a
              href={socialLink.url}
              target='_blank'
              rel='noopener noreferrer'
              key={socialLink.key}
            >
              <SocialIcon src={socialLink.img} alt='icons' />
            </a>
          ))}
        </Column>
    </FlexContainer>

    <MadeWithLove>new footer Made with ❤️ by The Blueprint Team</MadeWithLove>
  </FooterContainer>
);

const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBlue};
  color: ${(props) => props.theme.colors.offWhite};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Column = styled.div`
  margin: 50px 50px;
  text-align: center;
  font-weight: bold;
`

const FooterGrid = styled.div`
  margin: 0 20px 20px;
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

const SocialIcon = styled.img`
  width: 30px;
  height: auto;
  margin-right: 10px;
  filter: invert(98%) sepia(6%) saturate(2%) hue-rotate(208deg) brightness(116%) contrast(100%);
`

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
  background-color: ${(props) => props.theme.colors.primaryBlue};
  text-align: center;
  padding: 5px 0;
`;

export default Footer;
