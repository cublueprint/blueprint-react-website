import styled from 'styled-components';
import LinkedinLogo from '../content/images/linkedin-icon.webp';

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
  background-color: darkblue;
  padding: 10px;
  width: 250px;
  height: 250px;
  display: grid;
  grid-template-columns: ;
  grid-template: 'Picture';
`;

const ProfilePicture = styled.img`
  background-color: red;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const MemberName = styled.h2`
  background-color: darkgray;
`;

const MemberPosition = styled.h2`
  background-color: lightgray;
`;

const LinkedinIcon = styled.img`
  background-color: blue;
`;

export default PersonCard;
