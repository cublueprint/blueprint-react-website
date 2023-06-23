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
          <ValueTitle>{value.title}</ValueTitle>
          <ValueContent>
            <Description>{value.description}</Description>
            <Image src={value.image.src} alt={value.image.alt}></Image>
          </ValueContent>
          </ValueDiv>
        ))}
    </ValuesBlockDiv>
);

const ValueDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom:30px;
`

const ValueContent = styled.div`
    display: flex;
`

const ValueTitle = styled.p`
  color: #0078E8;
  font-weight: bold;
  margin-bottom: 0;
`

const Image = styled.img`
    min-width: 20%;
    max-width: 50%;
    max-height: 30%;
    margin-left: 50px;
    margin-top: 30px;
    margin-bottom: 30px;
    order: 2;

`;

const Description = styled.p`
    margin: 0;
    padding: 0;
    width: 50%;
    order: 1;
`;

const ValuesBlockDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 220px 0px 220px;
    & > ${ValueDiv}:nth-child(even) {
        > ${ValueTitle} {
            margin-left: auto;
        }
        > ${ValueContent} > ${Description} {
            order: 2;
            text-align: right;
        }
        > ${ValueContent} > ${Image} {
            order: 1;
            margin-left: auto;
            margin-right: 50px;
        }
    }

    @media only screen and (max-width: 1100px) {
        > ${ValueDiv} > ${ValueTitle} {
            margin: 0 auto;
        }
        > ${ValueDiv} > ${ValueContent} { 
            flex-direction: column;
        }
        > ${ValueDiv} > ${ValueContent} > ${Description} {
            order: 2;
            text-align: center !important;
            width: 100%;
        }
        > ${ValueDiv} > ${ValueContent} > ${Image} {
            order: 1;
            margin: 30px auto !important;
        }
    } 
`

//responsiveness for this block still needs a lot of work but is fine for now

export default ValuesBlock;