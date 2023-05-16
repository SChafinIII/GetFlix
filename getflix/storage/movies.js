'use client';

const { createSlice, PayloadAction } = require('@reduxjs/toolkit');

const initialState = {
  movies: [],
  showModal: false,
  movie: [{
    title: "",
    description: "",
    videoUrl: "",
    thumbnailUrl: "",
    genre: "",
    duration: "",
    id: "",
  }],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    updateMovieList(state, action) {
      state.movies = action.payload;
    },
    updateMovie(state, action) {
      state.movie = action.payload;
    },
    showModal(state, action) {
      state.showModal = true;
      state.movie = action.payload;
    },
    hideModal(state) {
      state.showModal = false;
      state.movie = [{
        title: "",
        description: "",
        videoUrl: "",
        thumbnailUrl: "",
        genre: "",
        duration:"",
        id:  "",
      }];
    }
  }

});

const movieActions = movieSlice.actions;

module.exports = {
  default: movieSlice,
  movieActions,
};