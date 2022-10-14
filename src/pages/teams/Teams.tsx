import styled from 'styled-components';
import TitleBlock from '../../components/TitleBlock';
import ContentBlock from '../../components/ContentBlock';
import Team from './Team';

import content from '../../static/json/teams';

const Teams = () => (
  <PageBody>
    <TitleBlock content={content.titleBlock}></TitleBlock>

    {content.teamsList.map((team, index) => (
      <ContentBlock title={team.name}>
        <Team members={team.members} />
      </ContentBlock>
    ))}
  </PageBody>
);

const PageBody = styled.div`
  background-color: ${(props) => props.theme.colors.skyBlue};
`;

export default Teams;
