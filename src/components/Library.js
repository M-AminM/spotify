import LibraryMusic from "./LibraryMusic";
import { useSelector } from "react-redux";

const Library = ({ playRef }) => {
    const libraryStatus = useSelector(state => state.liStatus);
    const songs = useSelector(state => state.songs);
    
    return(
        <div className={`library ${libraryStatus ? "active-library" : ""}`}>
            <h2>Musics</h2>
            <div className="library-musics">
                {songs.map(song => 
                    <LibraryMusic song={song} key={song.id} playRef={playRef} id={song.id}/>
                    )}
            </div>
        </div>
    );
}
export default Library;