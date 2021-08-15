import * as actionTypes from '../actionTypes';
import {useSelector} from 'react-redux';

const initialState = {cart: []};

export default function CartReducer (state = initialState,action) {  
    
    // const initialCart = {...cart};
    const {/* please initialState methods in here */} = {...action.payload};

    switch(action.type) {
        case actionTypes.ADDTO_CART: {
            return {};
        }
        case actionTypes.UPDATEFROM_CART: {
            return {};
        }
        default: {
            return initialState;
        }
    }
}



























































