import TitleBlock from '../../components/TitleBlock';

//import styled from 'styled-components';

import content from '../../static/json/about';

const About = () => {
  //return <div>I'm the about section!😎😎 working on the about section</div>;
  return (
    <>
      <TitleBlock content={content.titleBlock}></TitleBlock>
      
    </>
  );
};

/*const PageBody = styled.div`
  background-color: ${(props) => props.theme.colors.skyBlue};
`;*/

export default About;
