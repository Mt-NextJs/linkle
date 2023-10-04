import React from 'react';
import Sidebar from './../components/Sidebar';
import VideoList from '../components/VideoList';
const Search = ({videoItems,selectVideoItem}) =>{
 
    return (
       <div className='contents-wrap'>
            <div className='sidebar-box'>
                <Sidebar />
            </div>
            <div className='list'>
             <VideoList 
             videoItems={videoItems}
             selectVideoItem={selectVideoItem}
             display="list-h"
              />
            </div>
        </div>
    )
}
export default Search;