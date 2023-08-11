import { Link } from 'react-router-dom';
import styled from 'styled-components';
import blueprintIcon from '../../static/images/blueprint_banner_negative.webp';
import MobileMenu from './MobileMenu';
//new header

interface HeaderProps {
  links: string[];
}

const Header = ({ links }: HeaderProps) => (
  <StyledHeader>
    <BlueprintIcon link={links[0]} />
    <StyledHeaderList>
      {links.map((link) => (
        <StyledHeaderLink key={`l-${link}`}>
          <Link to={link}>{link}</Link>
        </StyledHeaderLink>
      ))}
    </StyledHeaderList>
    <StyledMobileMenu>
      <MobileMenu links={links} />
    </StyledMobileMenu>
  </StyledHeader>
);

const BlueprintIcon = (props: { link: string }) => (
  <Link to={props.link}>
    <StyledBlueprintImage alt='Blueprint' src={blueprintIcon} />
  </Link>
);

const StyledHeader = styled.div`
  
  @media ${(props) => props.theme.viewport.mobile} {
    background-color: ${(props) => props.theme.colors.primaryBlue};
    color: ${(props) => props.theme.colors.offWhite};
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: ${(props) => props.theme.fonts.heading};
    font-weight: bold;
    text-transform: uppercase;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 1;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    height: 50px;
  }

  @media ${(props) => props.theme.viewport.tablet} {
    justify-content:space-between;
  }

  @media ${(props) => props.theme.viewport.laptop} {
    align-items: center;
    justify-content: space-evenly;
    height: 65px;
  }
`;

const StyledHeaderList = styled.div`
  @media ${(props) =>
      `${props.theme.viewport.mobile} , ${props.theme.viewport.tablet}`} {
    display: none;
  }

  @media ${(props) => props.theme.viewport.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 1vw;
    margin-right: 50px;
  }
`;

const StyledMobileMenu = styled.div`
  @media ${(props) =>
      `${props.theme.viewport.mobile} , ${props.theme.viewport.tablet}`} {
    display: flex;
  }

  @media ${(props) => props.theme.viewport.laptop} {
    display: none;
  }
`;

const StyledHeaderLink = styled.div`
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.offWhite};
  }
  a:hover {
    color: #ffffff;
  }
`;

const StyledBlueprintImage = styled.img`
  margin-top: 10px;
  max-width: 150px;
  margin-left: 4vw;
`;

export default Header;
