import styled from 'styled-components';

interface MissionBlockProps {
    content: {
        image: {
            picture: any;
            alt: string;
        };
        description: string;
    };
}

const MissionBlock = (props: MissionBlockProps) => (
    <MissionBlockDiv>
        <Image src={props.content.image.picture} alt={props.content.image.alt}></Image>
        <Description>{props.content.description}</Description>
    </MissionBlockDiv>
);

const MissionBlockDiv = styled.div`
    display: flex;
    margin: 0px 220px;
    align-items: center;
`

const Image = styled.img`
    margin: 50px;
    width: 25%;
    height: auto;
`;

const Description = styled.p`
    margin: 50px;
    width: 75%;
`;

export default MissionBlock;