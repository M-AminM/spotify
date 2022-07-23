const isPlaying  = (state=false, action) => {
    switch(action.type) {
        case 'playing':
            return !state;
        default:
            return state;
    }
}

export default isPlaying;