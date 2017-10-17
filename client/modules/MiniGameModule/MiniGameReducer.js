import { SET_USER } from './MiniGameActions';

// Initial State
const initialState = {
    data: [],
    user: {},
};

const MiniGameReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_USER:
        return Object.assign({}, state, {
            user: action.payload,
        });

    default:
        return state;
    }
};

/* Selectors */

// Get all posts
// export const getPosts = state => state.posts.data;

export const getUserData = state => state.posts.user;

// Get post by cuid
// export const getPost = (state, cuid) => state.posts.data.filter(post => post === post);

// Export Reducer
export default MiniGameReducer;
