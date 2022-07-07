const Song = ({currentSong}) => {
    return(
        <div className="song-info">
            <img src={currentSong.image}/>
            <h2>{currentSong.title}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )

}
export default Song;