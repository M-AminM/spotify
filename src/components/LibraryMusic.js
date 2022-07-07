const LibraryMusic = ({song, setCurrentSong, songs}) => {


    const musicSelectHandler = () => {
        const selectSong = songs.filter((state) => state.id === song.id);
        setCurrentSong(selectSong[0]);
    }


    return(
        <div onClick={musicSelectHandler} className={`library-music ${song.active ? 'selected' : ""}`}>
            <img src={song.image}/>
            <div className="music-info">
                <h3>{song.title}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}
export default LibraryMusic;