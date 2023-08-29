import styled from 'styled-components';
import { TitleBlock, HomeBlock } from '../../components';
import HomeProjectsBlock from './HomeProjectsBlock';

import content from '../../static/json/home';

const Home = () => (
  <PageBody>
    <TitleBlock content={content.titleBlock}></TitleBlock>
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
