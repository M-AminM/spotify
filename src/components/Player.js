import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Player = ({playRef}) => {
    const isPlay = useSelector(state => state.playing);
    const currentSong = useSelector(state => state.current);
    const songs = useSelector(state => state.songs);
    const songInfo = useSelector(state => state.songInfo);
    const dispatch = useDispatch();

    const playSongHandler = () => {
        if(isPlay) {
            playRef.current.pause();
            dispatch({type: "playing"});
        }else{
            playRef.current.play();
            dispatch({type: "playing"});
        }
    }

    const rangeHandler = (e) => {
        playRef.current.currentTime = e.target.value;
        dispatch({type: "songInfo", value: {...songInfo, currentTime: e.target.value}});
    }
    const showTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }

   const activeLibraryHandler = (nexPrev) => {
        const newSong = songs.map((song) => {
            if(song.id === nexPrev.id) {
                return{
                    ...song, active: true,  
                }
            }else {
                return{
                    ...song, active: false,
                }
            }
        });
        dispatch({type: "Song", value: newSong})
    }

    const skipMusicHandler = async(direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === 'skip-forward') {
            dispatch({type: "Change-CurrentSong", value: songs[(currentIndex + 1) % songs.length]});
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        }
        if(direction === 'skip-back') {
            if((currentIndex - 1) % songs.length === -1){
                dispatch({type: "Change-CurrentSong", value: songs[songs.length - 1]});
                activeLibraryHandler(songs[songs.length - 1]);
                if(isPlay) playRef.current.play();;
                return; 
            }
            dispatch({type: "Change-CurrentSong", value: songs[(currentIndex - 1) % songs.length]});
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
        }
        if(isPlay) playRef.current.play();
    }

    const trackAnimation = {
        transform: `translateX(${songInfo.animationPer}%)`
    }

    return(
        <div className="player">
            <div className="time-control">
                <p>{showTime(songInfo.currentTime)}</p>
                <div className="track">
                    <input min={0} max={songInfo.duration || 0} type="range" onChange={rangeHandler} value={songInfo.currentTime}/>
                    <div style={trackAnimation} className="animate-track"></div>
                </div>
                <p>{songInfo.duration ? showTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <Link to="/prev" onClick={() => skipMusicHandler('skip-back')}>
                    <FontAwesomeIcon  className="back" icon={faAngleLeft}/>     
                </Link> 
                <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlay ? faPause : faPlay}/>
                <Link to="/next" onClick={() => skipMusicHandler('skip-forward')}>
                    <FontAwesomeIcon className="forward" icon={faAngleRight}/>
                </Link>
            </div>
        </div>
    );
}
export default Player;