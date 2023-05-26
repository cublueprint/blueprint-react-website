import TitleBlock from '../../components/TitleBlock';
import ContentBlock from '../../components/ContentBlock';
import MissionBlock from './MissionBlock';
import ValuesBlock from './ValuesBlock';

import styled from 'styled-components';

import content from '../../static/json/about';

const About = () => {
  //return <div>I'm the about section!😎😎 working on the about section</div>;
  return (
    <>
      <TitleBlock content={content.titleBlock}></TitleBlock>
      <ContentBlock title='Mission Statement'>
        <MissionBlock content={content.mission}></MissionBlock>
      </ContentBlock>
      <ContentBlock title="Our Values">
        <ValuesBlock content={content.values}></ValuesBlock>
      </ContentBlock>
    </>
  );
};

/*const PageBody = styled.div`
  background-color: ${(props) => props.theme.colors.skyBlue};
`;


*/

const Image = styled.img`
  grid-area: Image;
  width: 25%;
  top: 25%;
`;



const ValueTitle = styled.p`
  color: blue;
`

export default About;
