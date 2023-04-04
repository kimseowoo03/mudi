import ReactPlayer from 'react-player';

const IframeComponent = ({url}) => {
  return (
    <ReactPlayer
      url={url}
      playing={true}
      frameBorder="0"
      width='100%'
      height='100%'
      controls={true}
    ></ReactPlayer>
  );
};

export default IframeComponent;
