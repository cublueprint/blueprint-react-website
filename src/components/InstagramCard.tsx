import styled from 'styled-components';

const InstagramCard = ({ props }: any) => {
  return (
    <div>
    <a key={`t-${props.name}`} href={props.link} style={{display: "block", "width": "100%", textAlign: "center"}}>
    <CardDiv className='project'>
      <div>
        <Picture src={props.node.thumbnail_src} alt={`${props.node.edge_media_to_caption.edges[0].node.text}`} />
    </div>
    </CardDiv>
    </a>
    <Date><span className="bolding">Date:</span> {props.node.accessibility_caption}</Date>
    <Caption><span className="bolding">Caption:</span> {props.node.edge_media_to_caption.edges[0].node.text}</Caption>
    </div>
    

  );
};

const CardDiv = styled.div`
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

const Date = styled.p`
  color: ${(props) => props.theme.colors.textBlack};
`;

const Caption = styled.p`
  color: ${(props) => props.theme.colors.textBlack};
`;

export default InstagramCard;
