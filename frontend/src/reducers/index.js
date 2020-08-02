import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import users from './users';
import filters from './filters';



export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    users: users,
    filters:filters
});