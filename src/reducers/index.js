import { combineReducers } from "redux"
import currentSong from "./currentSong";
import isPlaying from "./isPlaying"
import libraryStatus from "./libraryStatus";
import songs from "./songs";
import songInfo from './songInfo';

const allReducers = combineReducers({
    playing: isPlaying,
    liStatus: libraryStatus,
    current: currentSong,
    songs: songs,
    songInfo: songInfo,
});

export default allReducers; 