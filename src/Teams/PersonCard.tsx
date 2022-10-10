import styled from 'styled-components';

interface PersonProps {
  picture: any;
  name: string;
  title: string;
  linkedin: string;
}

const PersonCard = (props: PersonProps) => {
  <CardDiv>
    <ProfilePicture
      src={props.picture}
      alt={`${props.name}'s profile picture`}
    ></ProfilePicture>
    <MemberName />
    <MemberPosition />
    <a href={props.linkedin}>
      <LinkedinIcon />
    </a>
  </CardDiv>;
};

const CardDiv = styled.div`
  background-color: darkblue;
  width: 50px;
  height: 50px;
  //separate it into a grid?
`;

const ProfilePicture = styled.img`
  background-color: red;
`;

const MemberName = styled.h2`
  background-color: darkgray;
`;

const MemberPosition = styled.h2`
  background-color: lightgray;
`;

const LinkedinIcon = styled.h2`
  background-color: blue;
`;

export { PersonCard };
