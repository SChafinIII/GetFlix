'use client';

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import  profileSlice  from './profiles';
import  movieSlice  from './movies';
import { use } from 'express/lib/application';

const store = configureStore({
    reducer: {
        profile: profileSlice.reducer,
        movies: movieSlice.reducer
    }
});

export const appUseDispatch: () => typeof store.dispatch = useDispatch;
export const appUseSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export type RootState = ReturnType<typeof store.getState>;

export default store;

