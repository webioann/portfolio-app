import {createStore,combineReducers,applyMiddleware} from "redux";
import genderReducer from './Reducers/genderReducer'
import pageSizeReducer from './Reducers/pageSizeReducer'
import natioReducer from './Reducers/natioReducer'
import showListReducer from './Reducers/showListReducer'
import showMenuReducer from './Reducers/showMenuReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
    gender: genderReducer,
    pageSize: pageSizeReducer,
    natio: natioReducer,
   showList: showListReducer,
   showMenu: showMenuReducer,
})

const store = createStore(rootReducer,applyMiddleware(thunk,logger));

export default store;
