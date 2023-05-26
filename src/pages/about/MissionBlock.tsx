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
    display: grid;
    grid-template-columns: auto 1fr; /* Adjust the column sizes as needed */
    grid-gap: 20px; /* Adjust the gap between the columns as needed */
    align-items: center;
`

const Image = styled.img`
    margin: 50px;
    width: 75%;
    height: auto;
`;

const Description = styled.p`
    margin: 50px;
`;

export default MissionBlock;