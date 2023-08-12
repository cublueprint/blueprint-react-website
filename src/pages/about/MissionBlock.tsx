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
    <FlexContainer>
    <MissionBlockDiv>
        <Image src={props.content.image.src} alt={props.content.image.alt}></Image>
        <Description>{props.content.description}</Description>
    </MissionBlockDiv>
    </FlexContainer>
);

//fine for now but need to be made responsive

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`

const MissionBlockDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: center;
    align-items: center;
    @media ${(props) => `${props.theme.viewport.laptop}`} {
        flex-grow: 0.8;
        flex-direction: row;
    }
`

const Image = styled.img`
    height: auto;
    width: 55%;
    margin: 50px 50px 25px 50px;
    @media ${(props) => `${props.theme.viewport.laptop}`} {
        margin: 50px;
        width: 25%;
    }
`;

const Description = styled.p`
    margin: 25px 50px 50px 50px;
    width: 55%;
    text-align: center;
    @media ${(props) => `${props.theme.viewport.laptop}`} {
        text-align: right;
        margin: 50px;
        width: 35%;
    }
`;

export default MissionBlock;