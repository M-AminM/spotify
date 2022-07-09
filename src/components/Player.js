import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Player = ({playRef, isPlaying, setIsPlaying, songInfo, setSongInfo, currentSong, setCurrentSong, songs, setSongs}) => {



    const playSongHandler = () => {
        if(isPlaying) {
            playRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            playRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const rangeHandler = (e) => {
        playRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
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
        setSongs(newSong);
    }


    const skipMusicHandler = async(direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === 'skip-forward') {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        }
        if(direction === 'skip-back') {
            if((currentIndex - 1) % songs.length === -1){
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
                if(isPlaying) playRef.current.play();;
                return; 
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
        }
        if(isPlaying) playRef.current.play();
    }

    return(
        <div className="player">
            <div className="time-control">
                <p>{showTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration || 0} type="range" onChange={rangeHandler} value={songInfo.currentTime}/>
                <p>{songInfo.duration ? showTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <Link to="/prev" onClick={() => skipMusicHandler('skip-back')}>
                    <FontAwesomeIcon  className="back" icon={faAngleLeft}/> 
                </Link> 
                <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying ? faPause : faPlay}/>
                <Link to="/next" onClick={() => skipMusicHandler('skip-forward')}>
                    <FontAwesomeIcon className="forward" icon={faAngleRight}/>
                </Link>
            </div>
        </div>
    );
}
export default Player;