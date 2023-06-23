import styled from 'styled-components';

interface MissionBlockProps {
    content: {
        image: {
            src: string;
            alt: string;
        };
        description: string;
    };
}

const MissionBlock = (props: MissionBlockProps) => (
    <MissionBlockDiv>
        <Image src={props.content.image.src} alt={props.content.image.alt}></Image>
        <Description>{props.content.description}</Description>
    </MissionBlockDiv>
);

//fine for now but need to be made responsive

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