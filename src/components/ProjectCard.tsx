import styled from 'styled-components';
import Button from './Button';

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
        <Button key={`t-${props.name}`} link={props.link} text={'Learn More'}></Button>
      </BackOfCard>
    </CardDiv>

  );
};

const CardDiv = styled.div`
  border: ${(props) => props.theme.colors.borderBlue} solid 5px;
  border-radius: 3px;
`;

const Picture = styled.img`
  width: 90%;
  margin: auto;
  display: block;
  @media ${(props) => `${props.theme.viewport.tablet}`} {
    padding-top: 15px;
  }
`;

const Name = styled.h2`
  margin: 10px;
  color: ${(props) => props.theme.colors.primaryBlue};
  font-weight: 700;
`;

const Description = styled.h2`
  color: ${(props) => props.theme.colors.textBlack};
  width: 80%;
  height: 80%;
  display:flex;
  align-items:center;
  justify-content:center;
  margin: auto;
  text-align: center;
`;
const BackOfCard = styled.div`
  display: none;
  @media ${(props) => `${props.theme.viewport.hover}`} {
    display: unset;
    background-color: ${(props) => props.theme.colors.cloudBlue};
    opacity: 0;
    border-radius: 3px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: ease-in 0.3s;
    &:hover{
      opacity: 0.9;
    }
  }
`

export default ProjectCard;
