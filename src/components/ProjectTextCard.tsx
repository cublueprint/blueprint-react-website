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

const ProjectTextCard = ({ props }: ProjectProps) => {
  const projectName = props.name.replace(/\s/g, '');
  return (
    <CardDiv>
      <PictureWrapper>
        <Picture src={props.image} alt={`${props.name} logo`} />
      </PictureWrapper>
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
  width: 80%;
  height: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;

  transition: ease-in 0.3s;
  &:hover {
    transform: translate(-5px, -5px);
    filter: drop-shadow(5px 5px 2px ${(props) => props.theme.colors.dropShadow});
  }

  @media ${(props) => `${props.theme.viewport.mediumMobile}`} {
    width: 250px;
  }
`;

const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 180px;
  width: 80%;
  margin: auto;
  border-radius: 10px;
  border: ${(props) => props.theme.colors.cloudBlue} 20px solid;
  background-color: white;
`;

const Picture = styled.img`
  width: 80%;
  margin: auto;
  display: block;
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

export default ProjectTextCard;
