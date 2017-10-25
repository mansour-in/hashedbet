import { SET_USER, SET_ETHERBALANCE, GET_TOKEN_STATUS, SET_ETHEREUM_TOKEN } from './MiniGameActions';

// Initial State
const initialState = {
    etherdata: {},
    user: {},
    tokenstatus: {},
    confirmedtokens: {},
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
    case SET_ETHEREUM_TOKEN:
        return Object.assign({}, state, {
            confirmedtokens: action.payload,
        });
    default:
        return state;
    }
};

/* Selectors */


export const getUserData = state => state.minigame.user;
export const getEtherData = state => state.minigame.etherdata;
export const getConfirmedTokensData = state => state.minigame.tokenstatus;

// Export Reducer
export default MiniGameReducer;
