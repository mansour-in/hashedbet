import { ADD_POST, ADD_POSTS, DELETE_POST, SET_USER } from './PostActions';

// Initial State
const initialState = {
  data: [],
  user: {}
 };

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return {
        data: [action.post, ...state.data],
      };

    case ADD_POSTS :
      return {
        data: action.posts,
      };
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
export default PostReducer;
