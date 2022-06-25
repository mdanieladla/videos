import React from 'react';
//style
import '../style/VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className='video-item item' onClick={() => onVideoSelect(video)}>
      <img
        className='ui image'
        src={video.snippet.thumbnails.medium.url}
        alt='description pictur of the video'
      />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
