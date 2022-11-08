import styled from 'styled-components';
import LinkedinLogo from '../static/images/linkedin-icon.webp';

interface PersonProps {
  props: {
    name: string;
    position: string;
    linkedin: string;
    picture: any;
  };
}

const PersonCard = ({ props }: PersonProps) => {
  return (
    <CardDiv>
      <Picture src={props.name} alt={`${props.name}'s profile picture`} />
      <Name>{props.name}</Name>
      <Role>{props.position}</Role>
      <a href={props.linkedin}>
        <LinkedinIcon
          src={LinkedinLogo}
          alt={`${props.name}'s profile picture`}
        />
      </a>
    </CardDiv>
  );
};

const CardDiv = styled.div`
  border: ${(props) => props.theme.colors.primaryBlue} solid 2px;
  border-radius: 10px;
  padding: 10px;
  width: 250px;
  height: 270px;
  display: grid;
  grid-template-rows: 6fr 1fr 1fr;
  grid-template-columns: 6fr 1fr;
`;

const Picture = styled.img`
  grid-column-start: 1;
  grid-column-end: 3;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background-color: white; 
`;

const Name = styled.h2`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-area: 'Name';
  margin: 0;
  color: ${(props) => props.theme.colors.primaryBlue};
  font-weight: 700;
`;

const Role = styled.h4`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-area: 'Role';
  margin: 0;
`;

const LinkedinIcon = styled.img`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-area: 'LinkedinIcon';
  background-color: darkgray;
  width: 30px;
`;

export default PersonCard;
