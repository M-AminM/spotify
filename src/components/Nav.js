import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Nav = ({libraryStatus, setLibraryStatus}) => {
    return(
        <nav>
            <Link to="/">
                <h1>Spotify</h1>
            </Link>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>Musics <FontAwesomeIcon icon={faMusic}/></button>
           
        </nav>
    );
}
export default Nav;