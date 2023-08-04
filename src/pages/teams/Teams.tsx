import styled from 'styled-components';
import NewTitleBlock from '../../components/NewTitleBlock';
import ContentBlock from '../../components/ContentBlock';

import content from '../../static/json/teams';
import PersonCard from './PersonCard';

const Teams = () => (
  <PageBody>
    <NewTitleBlock content={content.titleBlock}></NewTitleBlock>

    <TeamsContainer>
      {content.teamsList.map((team, index) => (
        <ContentBlock title={team.name}>
          <TeamFlexBox>
            {team.members.map((person) => (
              <PersonCard {...person} />
            ))}
          </TeamFlexBox>
        </ContentBlock>
      ))}
    </TeamsContainer>
  </PageBody>
);

const PageBody = styled.div``;

const TeamsContainer = styled.div``;
const TeamFlexBox = styled.div`
  padding: 50px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
`;

export default Teams;
