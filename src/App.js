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

  const playRef = useRef();


  return(
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player playRef={playRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
      <audio 
      src={currentSong.audio} 
      ref={playRef}>
      </audio>
    </div>
  )
}

export default App;
