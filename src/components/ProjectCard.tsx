import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ProjectProps {
  props: {
    name: string;
    description: string;
    link?: string;
    image: any;
  };
}

const ProjectCard = ({ props }: ProjectProps) => {
  const projectName = props.name.replace(/\s/g, '');
  return (
    <CardDiv>
      <Picture src={props.name} alt={`${props.name} project logo`} />
      <Name>{props.name}</Name>
      <Description>{props.description}</Description>
      <ReadMore to={`${projectName}`} state={{ projectDetails: props }}>
        Read More
      </ReadMore>
    </CardDiv>
  );
};

const CardDiv = styled.div`
  background-color: ${(props) => props.theme.colors.skyBlue};
  border-radius: 10px;
  padding: 30px;
  width: 250px;
  height: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Picture = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 10px;
  border: ${(props) => props.theme.colors.cloudBlue} 20px solid;
  background-color: white;
`;

const Name = styled.h2`
  margin: 10px 0;
  font-weight: 700;
`;

const Description = styled.h4`
  height: 100px;
  margin: 0;
`;

const ReadMore = styled(Link)`
  color: ${(props) => props.theme.colors.primaryBlue};
  text-decoration: none;
  font-weight: 700;
`;

export default ProjectCard;
