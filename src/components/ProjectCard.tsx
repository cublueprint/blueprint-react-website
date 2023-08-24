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
        <a key={`t-${props.name}`} href={props.link} style={{display: "block", "width": "100%", textAlign: "center"}}>
          <Button>LEARN MORE {'>'}</Button>
        </a>
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

const Button = styled.button`
  @media ${(props) => `${props.theme.viewport.hover}`} {
    transition: ease-in 0.3s;
    font-weight: bold;
    bottom: 0;
    right: 0;
    border: 3px solid #0078e8;
    padding: 10px 30px;
    background: rgba(255, 255, 255, 0);
    color: #0078e8;
    font-family: ${(props) => props.theme.fonts.content};
    &:hover {
      background: #0078e8;
      color: white;
      cursor: pointer;
    }
  }
`;

export default ProjectCard;
