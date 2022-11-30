import styled from 'styled-components';

interface ProjectProps {
  props: {
    name: string;
    description: string;
    picture: any;
  };
}

const ProjectCard = ({ props }: ProjectProps) => {
  return (
    <CardDiv>
      <Picture src={props.name} alt={`${props.name} project logo`} />
      <Name>{props.name}</Name>
      <Description>{props.description}</Description>
    </CardDiv>
  );
};

const CardDiv = styled.div`
  background-color: ${(props) => props.theme.colors.skyBlue};
  border-radius: 10px;
  padding: 10px;
  width: 250px;
  height: 500px;
`;

const Picture = styled.img`
  /* height: 200px;
  width: 200px; */
  border-radius: 10px;
  border: ${(props) => props.theme.colors.cloudBlue} 20px solid;
  background-color: white;
`;

const Name = styled.h2`
  margin: 0;
  font-weight: 700;
`;

const Description = styled.h4`
  margin: 0;
`;

export default ProjectCard;
