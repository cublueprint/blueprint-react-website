import styled from 'styled-components';

interface ProjectProps {
  props: {
    name: string;
    description: string;
    link: string;
    image: any;
  };
}

const ProjectCard = ({ props }: ProjectProps) => {
  return (
    <CardDiv className='project'>
        <Picture src={props.image} alt={`${props.name}`} />
      <Name>{props.name}</Name>
      {/* <Role>{props.description}</Role> */}
    </CardDiv>
  );
};

const CardDiv = styled.div`
  border: ${(props) => props.theme.colors.primaryBlue} solid 2px;
  border-radius: 15px;
`;

const Picture = styled.img`
  width: 90%;
  margin: auto;
  display: block;
  border-radius: 10px;
  background-color: white; 
`;

const Name = styled.h2`
  margin: 10px;
  color: ${(props) => props.theme.colors.primaryBlue};
  font-weight: 700;
`;

const Role = styled.h4`
  padding: 10px;
`;

export default ProjectCard;
