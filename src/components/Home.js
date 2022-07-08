import Music from "./Music";

const Home = ({songs}) => {
    return(
        <div className="home">
            <div className="musics">
                {songs.map(song => {
                    return <Music song={song}/>    
                })}
            </div>
        </div>
    )
}
export default Home;