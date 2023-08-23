import styled from 'styled-components';

const InstagramCard = ({ props }: any) => {
  let details;
  if (props.node.accessibility_caption) {
    details = <Details><span className="bolding">Details:</span> {props.node.accessibility_caption}</Details>
  }
  return (
    <div>
    <a key={`t-${props.name}`} href={props.link} style={{display: "block", "width": "100%", textAlign: "center"}}>
    <CardDiv className='project'>
      <div>
        <Picture src={props.node.thumbnail_src} crossOrigin="anonymous" alt={`${props.node.edge_media_to_caption.edges[0].node.text}`} />
    </div>
    </CardDiv>
    </a>
    {details}
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

const Details = styled.p`
  color: ${(props) => props.theme.colors.textBlack};
`;

const Caption = styled.p`
  color: ${(props) => props.theme.colors.textBlack};
`;

export default InstagramCard;
