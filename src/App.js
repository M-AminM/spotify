import { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import './style/app.scss';
import data from './data/data.json';
import { useRef } from "react";
import Library from "./components/Library";
import Nav from "./components/Nav"

const App = () => {
  
  const[songs, setSongs] = useState(data);
  const[currentSong, setCurrentSong] = useState(data[0]);
  const[isPlaying, setIsPlaying] = useState(false);
  const[songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animation: 0,
  });
  const[libraryStatus, setLibraryStatus] = useState(false);

  const playRef = useRef();

  const timeUpdateHandler = (e) => {
    const currentTime = Math.round(e.target.currentTime);
    const duration = Math.round(e.target.duration);
    const animation = Math.round((currentTime / duration) * 100);
    setSongInfo({...songInfo, currentTime: currentTime, duration: duration, animation: animation});

  }


  return(
    <div className={`App  ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player playRef={playRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} songInfo={songInfo} setSongInfo={setSongInfo}/>
      <Library songs={songs} setCurrentSong={setCurrentSong} libraryStatus={libraryStatus} />

      <audio 
      src={currentSong.audio} 
      ref={playRef}
      onTimeUpdate={timeUpdateHandler}>
      </audio>
    </div>
  )
}

export default App;
