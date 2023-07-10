import styled from 'styled-components';
import HomeTitleBlock from './HomeTitleBlock';
import HomeAboutBlock from './HomeAboutBlock';

import content from '../../static/json/home';

const Home = () => (
  <PageBody>
    <HomeTitleBlock content={content.titleBlock}></HomeTitleBlock>
    <HomeAboutBlock content={content.aboutBlock}></HomeAboutBlock>
  </PageBody>
);

const PageBody = styled.div`
  background-color: #F8FBFF;};
`;

export default Home;
