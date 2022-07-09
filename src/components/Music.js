import { Link } from "react-router-dom";

const Music = ({song}) => {
    return(
        <div>
            <h2>{song.title}</h2>
            <Link to={`${"/" + song.title}`}>
                <img src={song.image}/>
            </Link>
        </div>
    )
}
export default Music;