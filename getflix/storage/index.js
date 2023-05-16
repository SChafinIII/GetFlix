'use client';

const { configureStore } = require('@reduxjs/toolkit');
const { useDispatch, useSelector } = require('react-redux');
const profileSlice = require('./profile').default;
const movieSlice = require('./movies').default;

const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
    movies: movieSlice.reducer,
  }
});

const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;

const RootState = store.getState();

module.exports = {
  useAppDispatch,
  useAppSelector,
  RootState,
  default: store,
};