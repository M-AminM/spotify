const libraryStatus = (state=false, action) => {
    switch(action.type) {
        case 'libraryStatus':
            return !state;
        default:
            return state;
    }
}

export default libraryStatus;