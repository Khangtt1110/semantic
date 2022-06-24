import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from './counter';
import likeReducer from './like';

export default configureStore({
    reducer: {
        counter: counterReducer,
        like: likeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
