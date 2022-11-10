const InstagramHelper = ({ data }) => {

  return data.edges.map(({ node }) => {
    const {
      edge_media_to_comment,
      edge_media_preview_like,
      taken_at_timestamp,
      edge_media_to_caption,
      thumbnail_src,
      shortcode
    } = node;
    return {
      comments_no: edge_media_to_comment.count,
      likes: edge_media_preview_like.count,
      taken_at_timestamp,
      caption: edge_media_to_caption.edges[0].node.text,
      thumbnail: thumbnail_src,
      link: `https://www.instagram.com/p/${shortcode}/`
    };
  });
};

module.exports = {
  InstagramHelper,
};
