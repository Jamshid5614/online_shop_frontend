import * as actionTypes from '../actionTypes'; 

export function updateUserAction (payload) {
    return {type: actionTypes.UPDATE_USER,payload};
}

export function clearUserAction () {
    return {type: actionTypes.CLEAR_USER};
}




