import { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import './style/app.scss';
import data from './data/data.json';
import { useRef } from "react";

const App = () => {
  
  const[songs, setSongs] = useState(data);
  const[currentSong, setCurrentSong] = useState(data[0]);
  const[isPlaying, setIsPlaying] = useState(false);
  const[songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animation: 0,
  });

  const playRef = useRef();

  const timeUpdateHandler = (e) => {
    const currentTime = Math.round(e.target.currentTime);
    const duration = Math.round(e.target.duration);
    const animation = Math.round((currentTime / duration) * 100);
    setSongInfo({...songInfo, currentTime: currentTime, duration: duration, animation: animation});

  }


  return(
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player playRef={playRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} songInfo={songInfo} setSongInfo={setSongInfo}/>
      <audio 
      src={currentSong.audio} 
      ref={playRef}
      onTimeUpdate={timeUpdateHandler}
      >
      </audio>
    </div>
  )
}

export default App;
