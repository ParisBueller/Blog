export default (state = [], action) => {
    //with a pure reducer, we are only going to return values
    // that use its input arguments (state, action)
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};