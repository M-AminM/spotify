import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Nav = () => {
    const libraryStatus = useSelector(state => state.liStatus);
    const dispatch = useDispatch();

    return(
        <nav>{
            !libraryStatus ?
            <Link to="/">
                <h1>Spotify</h1>
            </Link>
            : <h1></h1>
            }
            <button onClick={() => dispatch({type: "libraryStatus"})}>Musics <FontAwesomeIcon icon={faMusic}/></button>
           
        </nav>
    );
}
export default Nav;