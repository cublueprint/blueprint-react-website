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
      <div>
        <Picture src={props.image} alt={`${props.name}`} />
      <Name>{props.name}</Name>
    </div>
      <BackOfCard>
        <Description>{props.description}</Description>
      </BackOfCard>
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

const Description = styled.h4`
  padding: 10px;
`;
const BackOfCard = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBlue};
  opacity: 0.8;
  border-radius: 15px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  &:hover{
    visibility: visible;
  }
`

export default ProjectCard;
