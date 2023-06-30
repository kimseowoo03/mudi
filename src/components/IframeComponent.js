const IframeComponent = ({ url }) => {
  return (
    <iframe
      width="100%"
      height="100%"
      frameBorder=""
      src={url}
      title="YouTube video player"
      allowFullScreen
    />
  );
};

export default IframeComponent;
