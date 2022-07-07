import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player = () => {
    return(
        <div className="player">
            <div className="time-control">
                <p>Start</p>
                <input type="range"/>
                <p>End</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="back" icon={faAngleLeft}/>
                <FontAwesomeIcon className="play" icon={faPlay}/>
                <FontAwesomeIcon className="forward" icon={faAngleRight}/>
            </div>
        </div>
    );
}
export default Player;