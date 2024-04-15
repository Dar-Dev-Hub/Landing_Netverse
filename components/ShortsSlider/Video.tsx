import React from 'react';
import YouTube from 'react-youtube';

interface VideoProps {
  videoId: string;
}

const Video: React.FC<VideoProps> = ({ videoId }) => {
  const opts = {
  height: '30',
    width: '64',
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default Video;