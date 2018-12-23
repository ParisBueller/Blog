import _ from 'lodash';

import jsonPlaceholder from '../apis/jsonPlaceholder';
//Action creators must return plain JS objects with a type property.
//to use async actions, we must use middleware like redux-thunk.
//Also, by the time our action gets to a reducer we won't have fetched data.
export const fetchPosts =  () => async dispatch => {
    //Returning a function invokes redux-thunk in order to carry out
    //our asynchronous request. We then use dispatch to MANUALLY
    //dispatch an action.   
    const response =  await jsonPlaceholder.get('/posts');
    
    dispatch({ type: 'FETCH_POSTS', payload: response.data})
};

export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
//when we call lodash' _.memoize, it keeps requests in memory
//to keep from making that same identical request over and over unnecessarily
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
});
