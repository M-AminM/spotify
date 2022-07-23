import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Song = () => {
    const currentSong = useSelector(state => state.current);
    const songs = useSelector(state => state.songs);
    const dispatch = useDispatch();
    const {musicName} = useParams();
    
    songs.map((music) => {
        if(music.title === musicName) {
            dispatch({type: "Change-CurrentSong", value: music});
            music.active = true;
        }
    });

    return(
        <div className="song-info">
            <img src={currentSong.image}/>
            <h2>{currentSong.title}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )

}
export default Song;