import LibraryMusic from "./LibraryMusic";

const Library = ({songs, setCurrentSong, libraryStatus, playRef, isPlaying, setSongs}) => {
    return(
        <div className={`library ${libraryStatus ? "active-library" : ""}`}>
            <h2>Library</h2>
            <div className="library-musics">
                
                {songs.map(song => 
                    <LibraryMusic song={song} setCurrentSong={setCurrentSong} songs={songs} key={song.id} playRef={playRef} isPlaying={isPlaying} setSongs={setSongs}/>
                    )}
            </div>
        </div>
    );
}
export default Library;