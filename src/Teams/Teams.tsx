import styled from 'styled-components';
import TitleBlock from '../content/universal_components/TitleBlock';
import ContentBlock from './ContentBlock';

import content from '../content/json/teams';

interface TeamsProps {
  links: string[];
}

const Teams = (props: TeamsProps) => (
  <PageBody>
    <TitleBlock content={content.TitleBlock}></TitleBlock>
    {/* {content.TeamsList.map((team, index) => (
      <ContentBlock
        key={`t-${team.name}`}
        title={team.name}
        children={'2', '3'}
      >
        <Team content={team} />
      </ContentBlock>
    ))} */}
  </PageBody>
);

const PageBody = styled.div`
  background-color: ${(props) => props.theme.colors.skyBlue};
`;

interface TeamProps {
  content: {
    name: string;
    members: {
      name: string;
      linkedin: string;
      picture: string;
    }[];
  };
}

const Team = ({ content }: TeamProps) => <div>{content.name}</div>;

export default Teams;
