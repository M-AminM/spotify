import { useSelector } from "react-redux";
import Music from "./Music";

const Home = () => {
    const songs = useSelector(state => state.songs); 
       
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