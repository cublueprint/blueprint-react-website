import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ApplicationType = () => {
  const params = useParams();
  return (
    <Container>
      uplad page type
      {params.type}
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  width: 80vw;
  padding: 50px 0;
`;

export default ApplicationType;
