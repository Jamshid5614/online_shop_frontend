import * as actionTypes from '../actionTypes';

const initialState = {
    size: 0
}

export default function screenReducer (state = initialState,action) {
    const {size} = {...action.screen};
    switch(action.type) {
        case actionTypes.UPDATE_SCREEN_SIZE: {
            return {size};
        }
        default: {
            return initialState;
        }
    }
}


















