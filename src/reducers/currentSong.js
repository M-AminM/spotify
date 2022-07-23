import data from "../data/data.json";

const currentSong = (state=data[0], action) => {
    switch(action.type){
        case "Change-CurrentSong":{
            state = action.value;
            return state;
        }
        default:
            return state;
    }
}

export default currentSong;