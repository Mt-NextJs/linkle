import React from 'react';
import './VideoWatch.css'

const VideoWatch = ({selectedWatch}) => {
    return (
        <div className='watchBox'>
            <div className="playVideoBox">
            <iframe className="videoframe" type="text/html" title="비디오플레이어"
            src={`http://www.youtube.com/embed/${selectedWatch.id}`}
           ></iframe>
            </div>
            <div className='txtContainer'>
                <h2>{selectedWatch.snippet.title}</h2>
                <h3>{selectedWatch.snippet.channelTitle}</h3>
                <p className='desc'>{selectedWatch.snippet.description}</p>
            </div>
        </div>
    );
};
export default VideoWatch;