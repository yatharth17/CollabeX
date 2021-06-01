import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import logger from 'redux-logger';


const middleware = [thunk,logger];

const store = createStore(rootReducer,applyMiddleware(...middleware))

export default store;