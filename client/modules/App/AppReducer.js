// Import Actions
import { SET_USER, SET_BOT_ID, SET_CLIENT_ID, SET_CLIENT_NAME, SET_BOT_NAME } from './AppActions';

// Initial State
const initialState = {
    user: { },
    client: {
        id: '',
    },
    bot: {
        id: '',
    },
    botName: {
        name: '',
    },
    clientName: {
        name: '',
    },
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_USER:
        return Object.assign({}, state, {
            user: action.payload,
        });
    case SET_BOT_ID:
        return Object.assign({}, state, {
            bot: action.payload,
        });
    case SET_CLIENT_ID:
        return Object.assign({}, state, {
            client: action.payload,
        });
    case SET_CLIENT_NAME:
        return Object.assign({}, state, {
            clientName: action.payload,
        });
    case SET_BOT_NAME:
        return Object.assign({}, state, {
            botName: action.payload,
        });
    default:
        return state;
    }
};

/* Selectors */

// Get user
export const getUser = state => state.app.user;

export const getClientId = state => {
    return state.app.client.id;
};

export const getBotId = state => {
    return state.app.bot.id;
};

export const getBotName = state => {
    return state.app.botName;
};

export const getClientName = state => {
    return state.app.clientName.name;
};

// Export Reducer
export default AppReducer;
