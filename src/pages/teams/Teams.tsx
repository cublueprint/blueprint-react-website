import styled from 'styled-components';
import TitleBlock from '../../components/TitleBlock';
import ContentBlock from '../../components/ContentBlock';

import content from '../../static/json/teams';
import PersonCard from './PersonCard';

const Teams = () => (
  <PageBody>
    <TitleBlock content={content.titleBlock}></TitleBlock>

    {content.teamsList.map((team, index) => (
      <TeamContentBlock title={team.name}>
        <TeamFlexBox>
          {team.members.map((person) => (
            <PersonCard {...person} />
          ))}
        </TeamFlexBox>
      </TeamContentBlock>
    ))}
  </PageBody>
);

const PageBody = styled.div``;

const TeamContentBlock = styled(ContentBlock)``;

const TeamFlexBox = styled.div`
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 150px;
`;

export default Teams;
