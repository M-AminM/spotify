import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player = ({playRef, isPlaying, setIsPlaying, songInfo, setSongInfo}) => {

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

    return(
        <div className="player">
            <div className="time-control">
                <p>{showTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration} type="range" onChange={rangeHandler} value={songInfo.currentTime}/>
                <p>{showTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="back" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon className="forward" icon={faAngleRight}/>
            </div>
        </div>
    );
}
export default Player;