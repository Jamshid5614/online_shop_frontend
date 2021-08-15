import defaultProfileImg from '../../assets/images/defaultProfile.jpg';
import * as actionTypes from '../actionTypes'; 


const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    isAdmin: false,
    img: defaultProfileImg,
    lang: 'en',
    token: ''
}

export default function userReducer (state = initialState,action) {
    const {    
        first_name, 
        last_name, 
        email,
        password, 
        isAdmin,
        img,
        lang,
        token
    } = {...action.payload};
    switch(action.type) {
        case actionTypes.UPDATE_USER: {
            return {first_name, last_name, email,password,isAdmin,img,lang,token}
        }
        case actionTypes.CLEAR_USER: {
            return initialState;
        }
        default: {
            return initialState;
        }
    }
}
























