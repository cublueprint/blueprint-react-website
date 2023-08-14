import NewTitleBlock from '../../components/NewTitleBlock';
import ContentBlock from '../../components/ContentBlock';
import MissionBlock from './MissionBlock';
import ValuesBlock from './ValuesBlock';
import BannerBlock from '../../components/BannerBlock';

import content from '../../static/json/about';

const About = () => {
  return (
    <>
      <NewTitleBlock content={content.titleBlock}></NewTitleBlock>
      <ContentBlock title='Mission Statement' changeBackground>
        <MissionBlock content={content.mission}></MissionBlock>
      </ContentBlock>
      <ContentBlock title="Our Values" >
        <ValuesBlock content={content.values}></ValuesBlock>
      </ContentBlock>
      <BannerBlock content={content.banner}></BannerBlock>
    </>
  );
};

export default About;
