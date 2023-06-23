import TitleBlock from '../../components/TitleBlock';
import ContentBlock from '../../components/ContentBlock';
import MissionBlock from './MissionBlock';
import ValuesBlock from './ValuesBlock';
import BannerBlock from '../../components/BannerBlock';

import content from '../../static/json/about';

const About = () => {
  return (
    <>
      <TitleBlock content={content.titleBlock}></TitleBlock>
      <ContentBlock title='Mission Statement'>
        <MissionBlock content={content.mission}></MissionBlock>
      </ContentBlock>
      <ContentBlock title="Our Values" backgroundColour='white'>
        <ValuesBlock content={content.values}></ValuesBlock>
      </ContentBlock>
      <BannerBlock content={content.banner}></BannerBlock>
    </>
  );
};

export default About;
