import {createStore,combineReducers,applyMiddleware} from "redux";
// import countReducer from './Reducers/countReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
    // cash: countReducer,
})

const store = createStore(rootReducer,applyMiddleware(thunk,logger));

export default store;
