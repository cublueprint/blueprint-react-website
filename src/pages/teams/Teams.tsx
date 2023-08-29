import styled from 'styled-components';
import NewTitleBlock from '../../components/NewTitleBlock';
import ContentBlock from '../../components/ContentBlock';

import content from '../../static/json/teams';
import PersonCard from './PersonCard';

const Teams = () => (
  <>
    <NewTitleBlock content={content.titleBlock}></NewTitleBlock>
    <>
      {content.teamsList.map((team, index) => (
        <ContentBlock title={team.name} changeBackground={!index}>
          <TeamFlexBox>
            {team.members.map((person) => (
              <PersonCard {...person} />
            ))}
          </TeamFlexBox>
        </ContentBlock>
      ))}
    </>
  </>
);

const TeamFlexBox = styled.div`
  padding: 50px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
`;

export default Teams;
