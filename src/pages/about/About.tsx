import TitleBlock from '../../components/TitleBlock';
import ContentBlock from '../../components/ContentBlock';

import styled from 'styled-components';

import content from '../../static/json/about';

const About = () => {
  //return <div>I'm the about section!😎😎 working on the about section</div>;
  return (
    <>
      <TitleBlock content={content.titleBlock}></TitleBlock>
      <ContentBlock title='Mission Statement'>
        <Image src={content.mission.image.picture} alt={content.mission.image.alt}></Image>
        <Description>{content.mission.description}</Description>
      </ContentBlock>
      <ContentBlock title="Our Values">
        {content.values.map((value, index) => (
          <div>
          <ValueTitle>{value.title}</ValueTitle>
          <p>{value.description}</p>
          <Image src={value.image.picture} alt={value.image.alt}></Image>
          </div>
        ))}
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

const Description = styled.p`
  grid-area: Description;
  margin: 0;
`;

const ValueTitle = styled.p`
  color: blue;
`

export default About;
