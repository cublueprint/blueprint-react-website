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
      <ProfilePicture
        src={props.name}
        alt={`${props.name}'s profile picture`}
      />
      <MemberName>{props.name}</MemberName>
      <MemberPosition>{props.position}</MemberPosition>
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
  grid-template-columns: 4fr 1fr;
  grid-template-rows: 5fr 1fr 1fr;
  grid-template: 'Picture' 'Picture' 'Picture';
`;

const ProfilePicture = styled.img`
  background-color: red;
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;

const MemberName = styled.h2`
  background-color: darkgray;
  margin: 0;
`;

const MemberPosition = styled.h2`
  background-color: lightgray;
  margin: 0;
`;

const LinkedinIcon = styled.img`
  background-color: blue;
`;

export default PersonCard;
