import data from "../data/data.json";

const songs = (state=data, action) => {
    switch(action.type) {
        case "Song":
            return action.value;
        default:
            return state;

    }
}
export default songs;