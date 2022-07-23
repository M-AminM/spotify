const songInfo = (state = { currentTime: 0, duration: 0, animationPer: 0 }, action) => {
    switch(action.type){
        case "songInfo":
            return(action.value);
        default:
            return (state);
    }
};

export default songInfo;
