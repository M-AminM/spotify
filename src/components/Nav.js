import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Nav = () => {
    const libraryStatus = useSelector(state => state.liStatus);
    const songs = useSelector(state => state.songs);
    const dispatch = useDispatch();

    const spotifyHandler = async() => {
        const newSong = songs.map((song) => {
            return{
                ...song, active: false
            }
        });
        dispatch({type: "Song", value: newSong});
    }
    return(
        <nav>{
            !libraryStatus ?
            <Link to="/">
                <h1 onClick={spotifyHandler}>Spotify</h1>
            </Link>
            : <h1></h1>
            }
            <button onClick={() => dispatch({type: "libraryStatus"})}>Musics <FontAwesomeIcon icon={faMusic}/></button>
           
        </nav>
    );
}
export default Nav;