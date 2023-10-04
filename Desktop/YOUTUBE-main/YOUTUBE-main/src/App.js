import './App.css';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Watch from './pages/Watch';
import Header from './components/Header';
import {videoUrl,searchUrl,channelUrl} from './libs/api'
import { useEffect, useState } from 'react';

let defaultVideos = JSON.parse(sessionStorage.getItem('defaultVideos')) || null;
let selectedWatch  = JSON.parse(sessionStorage.getItem('selectedWatch')) || null;

function App() {
  const [videoItems,setVideoItems] = useState([]);
  const [selectVideo,setSelectVideo] = useState(null);
  //비디오데이타
  const videoDate = async ()=>{
    const url = videoUrl; 
    const response = await fetch(url);
    const result = await response.json();
    setVideoItems(result.items)
    defaultVideos=result.items
  }
  const search = async (keyword) => {
    const url = searchUrl(keyword)
    const response = await fetch(url);
    const result = await response.json();
    const resultCng= result.items.map(item=>({...item, id:item.id.videoId}))
    setVideoItems(resultCng);
/*     if( typeof result.item.id === 'string'){
      id=result.item.id
    } else(typeof result.item.id === 'object'){
      id=result.item.id.videoId;
    } */
  }

  useEffect(()=>{
    sessionStorage.setItem('defaultVideos',JSON.stringify(defaultVideos));
    sessionStorage.setItem('selectedWatch',JSON.stringify(selectedWatch));
  },[selectVideo])

  useEffect(()=>{// useEffect 구문에서는 async 함수가 들어갈 수 없다
    videoDate();
  },[])
  //로고클릭시 
  const clickLogo = () =>{
    setVideoItems(defaultVideos);
  }

const selectVideoItem = (video) => {
  setSelectVideo(video)
  selectedWatch=video;
  console.log(video)
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
}

  return (
    <div className="App">
      <BrowserRouter>
        <Header search={search} clickLogo={clickLogo} />
        <Routes>
          <Route path="/" element={<Home videoItems={videoItems} search={search} 
          selectVideoItem={selectVideoItem} selectVideo={selectVideo}/>} />
          <Route path="/search" element={<Search videoItems={videoItems} search={search} 
          selectVideoItem={selectVideoItem} selectVideo={selectVideo}/>} />
          <Route path="/watch" element={<Watch videoItems={videoItems} search={search} 
          selectVideoItem={selectVideoItem} selectVideo={selectVideo}
          selectedWatch={selectedWatch}/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
