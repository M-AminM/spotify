import { Link } from "react-router-dom";

const LibraryMusic = ({song, setCurrentSong, songs, playRef, isPlaying, setSongs, id}) => {

    const musicSelectHandler = async() => {
        const selectSong = songs.filter((state) => state.id === song.id);
        await setCurrentSong(selectSong[0]);

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
        console.log(newSong);
        setSongs(newSong); 
        if(isPlaying) playRef.current.play();
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