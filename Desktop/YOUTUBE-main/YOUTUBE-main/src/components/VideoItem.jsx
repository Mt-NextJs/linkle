import React from 'react';
import './VideoItem.css';
import {Link} from 'react-router-dom';
import * as common from './../libs/common'

const VideoItem = ({videoItem,selectVideoItem,display}) => {

    return (
        <li className={`videoItem ${display}`}>
            <Link to="/watch">
            <div className='Item' onClick={()=>selectVideoItem(videoItem)}>
                <div className='thumnail'>
                    <img src={videoItem.snippet.thumbnails.medium.url} alt="videoThumbnail" />
                </div>
                <div className='metaDate'>
                    <div className="channelImg">
                        <img src={videoItem.snippet.thumbnails.default.url} alt="channelImg-thum" />
                    </div>
                    <div className='infoText'>
                        <p className='title'>{videoItem.snippet.title}</p>
                        <p className='channel'>{videoItem.snippet.channelTitle}</p>
                        <p className='publishDate'>{common.publishDate(videoItem.snippet.publishedAt)}</p>
                    </div>
                </div>
            </div>
            </Link>
        </li>
    );
};
export default VideoItem;