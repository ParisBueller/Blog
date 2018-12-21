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