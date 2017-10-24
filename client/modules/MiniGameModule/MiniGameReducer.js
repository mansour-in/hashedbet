import { SET_USER, SET_ETHERBALANCE, GET_TOKEN_STATUS } from './MiniGameActions';

// Initial State
const initialState = {
    etherdata: {},
    user: {},
    tokenstatus: {},
};

const MiniGameReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_USER:
        return Object.assign({}, state, {
            user: action.payload,
        });
    case SET_ETHERBALANCE:
        return Object.assign({}, state, {
            etherdata: action.payload,
        });
    case GET_TOKEN_STATUS:
        return Object.assign({}, state, {
            tokenstatus: action.payload,
        });
    default:
        return state;
    }
};

/* Selectors */

// Get all posts
// export const getPosts = state => state.posts.data;

export const getUserData = state => state.minigame.user;
export const getEtherData = state => state.minigame.etherdata;
// Get post by cuid
// export const getPost = (state, cuid) => state.posts.data.filter(post => post === post);

// Export Reducer
export default MiniGameReducer;
