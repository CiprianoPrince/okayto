// rootReducer.js
import { combineReducers } from 'redux';
import { apiSlice } from './api/apiSlice';
import { addressApiSlice } from '../features/checkout/slices/api/addressApiSlice';
import { variantReducer } from '../features/variants/slices';
import { authenticationReducer } from '../features/authentication/slices';

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    [addressApiSlice.reducerPath]: addressApiSlice.reducer,
    authentication: authenticationReducer,
    variant: variantReducer,
});

export default rootReducer;
