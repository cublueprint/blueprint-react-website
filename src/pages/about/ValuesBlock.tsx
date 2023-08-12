import styled from 'styled-components';

interface ValuesBlockProps {
    content: {
        title: string;
        description: string;
        image: {
            src: string;
            alt: string;
        };
    }[];
}

const ValuesBlock = (props: ValuesBlockProps) => (
    <ValuesBlockDiv>
        {props.content.map((value, index) => (
          <ValueDiv>
            <ValueContent>
                <ValueTitle>{value.title}</ValueTitle>
                <Description>{value.description}</Description>
            </ValueContent>
            <Image src={value.image.src} alt={value.image.alt}></Image>
          </ValueDiv>
        ))}
    </ValuesBlockDiv>
);

const ValueDiv = styled.div`
    display: flex;
    justify-content: center;
`

const ValueContent = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    flex-basis: 0;
    flex-grow: 0.3;
`

const ValueTitle = styled.p`
  color: #0078E8;
  font-weight: bold;
  margin-bottom: 0;
`

const Image = styled.img`
    min-width: auto;
    max-width: 15%;
    max-height: 100%;
    margin-left: 0px;
`;

const Description = styled.p`
    margin: 0;
`;

const ValuesBlockDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px 0px;

    & > ${ValueDiv}:nth-child(even) {
        flex-direction: row-reverse;
        > ${ValueContent} > ${ValueTitle} {
            margin-left: auto;
        }
        > ${ValueContent} > ${Description} {
            text-align: right;
        }
    }

    @media only screen and (max-width: 1100px) {
        > ${ValueDiv} >  ${ValueContent} > ${ValueTitle} {
            margin: 0 auto;
        }
        > ${ValueDiv} { 
            flex-direction: column-reverse !important;
            align-items: center;
        }
        > ${ValueDiv} > ${ValueContent} > ${Description} {
            text-align: center !important;
            margin: 0px 30px;
        }
        > ${ValueDiv} > ${Image} {
            max-width: 50%;
            margin: 30px;
        }
    } 
`

//responsiveness for this block still needs a lot of work but is fine for now

export default ValuesBlock;