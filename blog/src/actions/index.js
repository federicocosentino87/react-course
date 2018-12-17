import jsonPlaceholders from '../apis/jsonPlaceholder'

export const fetchPosts = () => {
    return async function (dispatch, getState) {
        const response = await jsonPlaceholders.get('/posts')

        dispatch({ type: 'FETCH_POSTS', payload : response });
    }
};
