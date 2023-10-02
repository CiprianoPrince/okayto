// rootReducer.js
import { combineReducers } from 'redux';
import { apiSlice } from './api/apiSlice';
import authReducer from '../features/authentication/redux/authenticationSlice';
import { variantReducer } from '../features/variants/slices';

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    authentication: authReducer,
    variant: variantReducer,
});

export default rootReducer;
