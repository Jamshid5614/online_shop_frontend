import {createStore,combineReducers} from 'redux';
import userReducer from './reducers/UserReducer';
import cartReducer from './reducers/CartReducer';
import screenReducer from './reducers/ScreenReducer';
import {persistReducer,persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    screen: screenReducer,
});

const persistedConfig = {
    key: 'root',
    storage,
    whitelist: ['user','cart','screen']
}; 


const persistedReducer = persistReducer(persistedConfig,rootReducer);


const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store as default,persistor};






















