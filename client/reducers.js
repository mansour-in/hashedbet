/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import posts from './modules/Post/PostReducer';
import minigame from './modules/MiniGameModule/MiniGameReducer';

// Combine all reducers into one root reducer
export default combineReducers({
    posts,
    minigame,
});
