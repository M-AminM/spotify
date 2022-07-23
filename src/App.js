import Player from "./components/Player";
import Song from "./components/Song";
import './style/app.scss';
import { useRef } from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  
  const isPlay = useSelector(state => state.play);
  const libraryStatus = useSelector(state => state.liStatus);
  const currentSong = useSelector(state => state.current);
  const songs = useSelector(state => state.songs);
  const songInfo = useSelector(state => state.songInfo);
  const dispatch = useDispatch();
  const playRef = useRef(null);

  const songEndHandler = async() => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    dispatch({type: "Change-CurrentSong", value: songs[(currentIndex + 1) % songs.length]});
    if(isPlay) playRef.current.play();
  }
  const timeUpdateHandler = (e) => {
    const currentTime = Math.round(e.target.currentTime);
    const duration = Math.round(e.target.duration);
    const animation = Math.round((currentTime / duration) * 100);
    dispatch({type: "songInfo", value: {...songInfo, currentTime: currentTime, duration: duration, animationPer: animation}});
  }

  return(
    <div className={`App  ${libraryStatus ? "library-active" : ""}`}>
        <BrowserRouter>
          <Switch>
          <Route exact path="/" render={() =>
            <>
              <Home/>
            </>}/>

            <Route exact path="/:musicName" render={() =>
            <>
              <Nav/>
              <Song/>
              <Player playRef={playRef}/>
              <Library playRef={playRef}/>
              <audio src={currentSong.audio} ref={playRef} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} onEnded={songEndHandler}></audio>
            </>
          }/>
          </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App;
