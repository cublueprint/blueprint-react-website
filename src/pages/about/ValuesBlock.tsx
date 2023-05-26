import styled from 'styled-components';

interface ValuesBlockProps {
    content: {
        title: string;
        description: string;
        image: {
            picture: any;
            alt: string;
        };
    }[];
}

const ValuesBlock = (props: ValuesBlockProps) => (
    <ValuesBlockDiv>
        {props.content.map((value, index) => (
          <ValueDiv>
          <ValueTitle>{value.title}</ValueTitle>
          <Image src={value.image.picture} alt={value.image.alt}></Image>
          <Description>{value.description}</Description>
          </ValueDiv>
        ))}
    </ValuesBlockDiv>
);

const ValuesBlockDiv = styled.div`
    width: 80%;
    display: grid;
    
    justify-content: center;
`

const ValueDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto
    align-items: center;
    width: 70%;
`

const ValueTitle = styled.p`
  color: blue;
  grid-column: 1 / 2;
  margin-bottom: 0;
`

const Image = styled.img`
    width: 30%;
    height: auto;
    margin: 50px;

    grid-row: 1 / 2;
    grid-row: span 2;
`;

const Description = styled.p`
    margin: 0;
    padding: 0;
`;

export default ValuesBlock;