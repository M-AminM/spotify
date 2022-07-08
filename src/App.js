import { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import './style/app.scss';
import data from './data/data.json';
import { useRef } from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

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

  const playRef = useRef(null);

  const timeUpdateHandler = (e) => {
    const currentTime = Math.round(e.target.currentTime);
    const duration = Math.round(e.target.duration);
    const animation = Math.round((currentTime / duration) * 100);
    setSongInfo({...songInfo, currentTime: currentTime, duration: duration, animation: animation});
  }
  
  const songEndHandler = async() => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if(isPlaying) playRef.current.play();
}


  return(
    <div className={`App  ${libraryStatus ? "library-active" : ""}`}>
        <BrowserRouter>
          <Switch>
          <Route exact path="/" render={() =>
            <>
              <Home songs={songs}/>
            </>}/>

            <Route exact path="/track" render={() =>
               <>
                     <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player playRef={playRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} songInfo={songInfo} setSongInfo={setSongInfo} currentSong={currentSong} setCurrentSong={setCurrentSong} songs={songs} setSongs={setSongs}/>
      <Library songs={songs} setCurrentSong={setCurrentSong} libraryStatus={libraryStatus} playRef={playRef} isPlaying={isPlaying} setSongs={setSongs}/>

      <audio 
      src={currentSong.audio} 
      ref={playRef}
      onTimeUpdate={timeUpdateHandler}
      onLoadedMetadata={timeUpdateHandler}
      onEnded={songEndHandler}
      >
      </audio>
            </>}/>
          </Switch>
        </BrowserRouter>


    </div>
  )
}

export default App;
