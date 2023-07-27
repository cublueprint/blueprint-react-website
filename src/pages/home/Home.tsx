import styled from 'styled-components';
import TitleBlock from '../../components/TitleBlock';
import HomeAboutBlock from '../../components/AboutBlock';
import HomeProjectsBlock from './HomeProjectsBlock';

import content from '../../static/json/home';

const Home = () => (
  <PageBody>
    <TitleBlock content={content.titleBlock}></TitleBlock>
    <HomeAboutBlock content={content.aboutBlock}></HomeAboutBlock>
    <HomeProjectsBlock content={content.projectsBlock}></HomeProjectsBlock>
  </PageBody>
);

const PageBody = styled.div`
  background-color: #F8FBFF;};
`;

export default Home;
