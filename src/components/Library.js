import LibraryMusic from "./LibraryMusic";

const Library = ({songs, setCurrentSong, libraryStatus, playRef, isPlaying, setSongs}) => {
    return(
        <div className={`library ${libraryStatus ? "active-library" : ""}`}>
            <h2>Musics</h2>
            <div className="library-musics">
                {songs.map(song => 
                    <LibraryMusic song={song} setCurrentSong={setCurrentSong} songs={songs} key={song.id} playRef={playRef} isPlaying={isPlaying} setSongs={setSongs} id={song.id}/>
                    )}
            </div>
        </div>
    );
}
export default Library;