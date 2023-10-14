import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { apiSlice } from './api/apiSlice';
import storage from 'redux-persist/lib/storage'; // default: localStorage if web, AsyncStorage if react-native
import rootReducer from './rootReducer'; // Import your root reducer
import { addressApiSlice } from '../features/checkout/slices/api/addressApiSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authentication'], // Only authentication will be persisted, you can add other reducers if needed
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
            apiSlice.middleware,
            addressApiSlice.middleware
        ),
    devTools: true,
});

export const persistor = persistStore(store);
