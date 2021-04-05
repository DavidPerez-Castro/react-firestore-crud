import React, { useState, useEffect } from 'react';
import VideoCard from './videoCard.js'
import firebase1 from "../firebase";

function App() {
    const [refresh, doRefresh] = useState(0);
    const [videos, setVideos] = useState([]);
  
    useEffect(
      () => {
        firebase1.collection("videos").onSnapshot(
          snapshot => {
            setVideos(snapshot.docs.map(doc => doc.data()))
          }
        );
      }, []
    );
  
    return (
      <div className="app">
        <div className="app__video-cards" onScroll={() => doRefresh(prev => prev + 1)}>
          {videos.map(({ fileurl }, i) => (
            <VideoCard
              key={i}
              fileurl={fileurl} 
              refresh={refresh}
            />
          ))}
  
        </div>
      </div>
    );
  }
  
  export default App;