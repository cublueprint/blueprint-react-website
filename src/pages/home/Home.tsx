import styled from 'styled-components';
import { HomeBlock, NewTitleBlock } from '../../components';
import HomeProjectsBlock from '../../components/SwipableProjectsBlock';

import content from '../../static/json/home';

const Home = () => (
  <PageBody>
    <NewTitleBlock content={content.titleBlock}></NewTitleBlock>
    <HomeBlock content={content.aboutBlock}></HomeBlock>
    <HomeProjectsBlock content={content.projectsBlock}></HomeProjectsBlock>
    <HomeBlock content={content.getInvolvedBlock}></HomeBlock>
    <HomeBlock content={content.contactUsBlock}></HomeBlock>
  </PageBody>
);

const PageBody = styled.div`
  background-color: #f8fbff;
`;

export default Home;
