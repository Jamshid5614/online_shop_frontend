import * as actionTypes from '../actionTypes';

export function addToCartAction (payload) {
    return {type: actionTypes.ADDTO_CART,payload};
}

export function updateFromCart (payload) {
    return {type: actionTypes.UPDATEFROM_CART,payload};
}

export function deleteFromCart (id) {
    return {type: actionTypes.DELETEFROM_CART,id};
}











































