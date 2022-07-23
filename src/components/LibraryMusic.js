import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const LibraryMusic = ({song, playRef, id}) => {
    const isPlay = useSelector(state => state.playing); 
    const songs = useSelector(state => state.songs);
    const dispatch = useDispatch();

    const musicSelectHandler = async() => {
        const selectSong = songs.filter((state) => state.id === song.id);
        dispatch({type: "Change-CurrentSong", value: selectSong[0]});

        const newSong = songs.map((song) => {
            if(song.id === id) {
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
        if(isPlay) playRef.current.play();
    }

    return(
        <Link to={`${"/" + song.title}`}>
            <div onClick={musicSelectHandler} className={`library-music ${song.active ? 'selected' : ""}`}>
                <img src={song.image}/>
                <div className="music-info">
                    <h3>{song.title}</h3>
                    <h4>{song.artist}</h4>
                </div>
            </div>
        </Link>
    )
}
export default LibraryMusic;