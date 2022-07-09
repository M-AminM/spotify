import { useParams } from "react-router-dom";

const Song = ({currentSong, songs, setCurrentSong}) => {

    const {musicName} = useParams();
    songs.map((music) => {
        if(music.title === musicName) {
            setCurrentSong(music);
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