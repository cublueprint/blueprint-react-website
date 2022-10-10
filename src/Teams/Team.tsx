import styled from 'styled-components';
import PersonCard from './PersonCard';

interface TeamProps {
  members: {
    name: string;
    position: string;
    linkedin: string;
    picture: any;
  }[];
}

const Team = ({ members }: TeamProps) => (
  <TeamFlexBox>
    {members.map((person) => (
      <PersonCard props={person} />
    ))}
  </TeamFlexBox>
);

const TeamFlexBox = styled.div`
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

export default Team;
