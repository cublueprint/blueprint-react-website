import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ApplicationContent from '../../static/json/application';
import ApplicationText from './ApplicationText';

interface Application {
  title: string;
  body: string;
  url: string;
  linkText: string;
}

interface ContentSchema {
  openRoles: Application[];
  applications: Application[];
}

const ApplicationType = () => {
  const params = useParams();
  const [content, setContent] = useState<ContentSchema>();

  useEffect(() => {
    const applicationType: string | undefined = params.type;
    if (applicationType === 'Non-Profit')
      setContent(ApplicationContent['Non-Profit']);
    else {
      setContent(ApplicationContent['Student']);
    }
  }, [params]);

  return (
    <Container> 
      <Title>Our Openings</Title>
      <Subtitle>
        Here are our openings for {params.type}s. Select whatever you want to
        apply to!
      </Subtitle>

      <ApplicationLists>
        {content?.openRoles?.map((role, index) => {
          if (index + 1 === content.openRoles.length) {
            return (
              <ApplicationText
                key={index}
                title={role.title}
                body={role.body}
                url={role.url}
                linkText={role.linkText}
              />
            );
          } else {
            return (
              <ApplicationText
                key={index}
                title={role.title}
                body={role.body}
                url={role.url}
                linkText={role.linkText}
                last={true}
              />
            );
          }
        })}
      </ApplicationLists>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  width: 80vw;
  padding: 50px 0;

  @media (min-width: 1600px) {
    width: 1280px;
  }
  @media (min-width: 2150px) {
    width: 1720px;
  }
`;

const Title = styled.h1`
  grid-area: Title;
  margin: 0;
  color: ${(props) => props.theme.colors.primaryBlue};
  font-family: ${(props) => props.theme.fonts.heading};
  font-style: bold;
  font-size: 50px;
`;

const Subtitle = styled.p`
  grid-area: Subtitle;
  margin: 0;
`;
const ApplicationLists = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px 40px;
  justify-content: space-between;

`;

export default ApplicationType;
