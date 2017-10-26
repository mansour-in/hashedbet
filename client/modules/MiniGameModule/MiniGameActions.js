import callApi from '../../util/apiCaller';

// Export Constants
export const SET_USER = 'SET_USER';
export const GET_USER = 'GET_USER';
export const SET_ETHERBALANCE = 'SET_ETHERBALANCE';
export const GET_TOKEN_STATUS = 'GET_TOKEN_STATUS';
export const SET_ETHEREUM_TOKEN = 'SET_ETHEREUM_TOKEN';

// Export Actions
export function setUser(user) {
    return {
        type: SET_USER,
        payload: user,
    };
}

export function getUser() {
    return {
        type: GET_USER,
    };
}

export function setEtherBalance(etherdata) {
    return {
        type: SET_ETHERBALANCE,
        payload: etherdata,
    };
}

export function setEthereumToken(tokendata) {
    return {
        type: SET_ETHEREUM_TOKEN,
        payload: tokendata,
    };
}

export function getTokenStatus(status) {
    return {
        type: GET_TOKEN_STATUS,
        payload: status,
    };
}

export function getEthereumBalance() {
    return (dispatch, getState) => {
        if (getState().minigame.user) {
            return callApi('getEtherBalance/' + getState().minigame.user.ethereumAddress, 'get', {
                ethereumBalance: getState().minigame.ethereumAdress ? getState().minigame.ethereumAddress : '',
            }).then(res => {
                if (res) {
                    // console.log(JSON.stringify(res));
                    return dispatch(setEtherBalance(res));
                }
            });
        }
        return null;
    };
}

export function setTokenValues(data) {
    return (dispatch) => {
        return callApi('assignTokenToUser', 'PUT', data, {
            'content-type': 'application/json',
        }).then(res => {
            return dispatch(getTokenStatus(res));
        });
    };
}

// export function getConfirmedTokens(data) {
//     return (dispatch, getState) => {
//         if(getState().minigame.user) {}
//     }
// }

export function getConfirmedTokens() {
    return (dispatch, getState) => {
        if (getState().minigame.user) {
            return callApi('getConfirmedTokens/' + getState().minigame.user.ethereumAddress, 'get', {
                ethereumTokens: getState().minigame.ethereumAdress ? getState().minigame.ethereumAddress : '',
            }).then(res => {
                if (res) {
                    // console.log(JSON.stringify(res));
                    return dispatch(setEthereumToken(res));
                }
            });
        }
        return null;
    };
}
