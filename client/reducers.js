/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import { reducer as notifications } from 'react-notification-system-redux';

// Combine all reducers into one root reducer
export default combineReducers({
    app,
    notifications,
});
