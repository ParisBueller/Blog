import jsonPlaceholder from '../apis/jsonPlaceholder';
//Action creators must return plain JS objects with a type property.
//to use async actions, we must use middleware like redux-thunk.
//Also, by the time our action gets to a reducer we won't have fetched data.
export const fetchPosts =  () => {
    const promise =  jsonPlaceholder.get('/posts');

    return {
        type: 'FETCH_POSTS',
        payload: promise
    };
};