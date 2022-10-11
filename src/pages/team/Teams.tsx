import styled from 'styled-components';
import TitleBlock from '../../components/TitleBlock';
import ContentBlock from '../../components/ContentBlock';
import Team from './Team';

import content from '../../content/json/teams';

const Teams = () => (
  <PageBody>
    <TitleBlock content={content.TitleBlock}></TitleBlock>

    {content.TeamsList.map((team, index) => (
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
