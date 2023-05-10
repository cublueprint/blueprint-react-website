import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ApplicationContent from '../../static/json/application';
import ApplicationText from './ApplicationText';
import CompletedApplication from './CompletedApplication';

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
    if (applicationType === 'non-profit')
      setContent(ApplicationContent['non-profit']);
    else {
      setContent(ApplicationContent['student']);
    }
  }, [params]);

  return (
    <Container>
      <Title>Our {params.type} Openings</Title>
      <Subtitle>
        Here are our openings. Select whatever you want to apply to!
      </Subtitle>

      <ApplicationLists>
        <ApplicationList>
          {content?.openRoles?.map((role, index) => {
            return (
              <ApplicationText
                key={index}
                title={role.title}
                body={role.body}
                url={role.url}
                linkText={role.linkText}
              />
            );
          })}
        </ApplicationList>

        <ApplicationList>
          <CompletedApplication
            title={'A jawb'}
            body={'A job you once wanted :")'}
            url={'#'}
            linkText={"I'm not intereste anymore!"}
          />
        </ApplicationList>
      </ApplicationLists>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  width: 80vw;
  padding: 50px 0;
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
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 5vh;
`;

const ApplicationList = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ApplicationType;
