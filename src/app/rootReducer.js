// rootReducer.js
import { combineReducers } from 'redux';
import { apiSlice } from './api/apiSlice';
import authReducer from '../features/authentication/redux/authenticationSlice';

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    authentication: authReducer,
});

export default rootReducer;
