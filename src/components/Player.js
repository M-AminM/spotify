import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player = ({playRef, isPlaying, setIsPlaying}) => {

    const playSongHandler = () => {
        if(isPlaying) {
            playRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            playRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }


    return(
        <div className="player">
            <div className="time-control">
                <p>Start</p>
                <input type="range"/>
                <p>End</p>
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