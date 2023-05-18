import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MovieState {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: string;
  id: string;
}

interface InitialState {
  movies: MovieState[];
  showModal: boolean;
  movie: MovieState[];
}

const initialState: InitialState = {
  movies: [],
  showModal: false,
  movie: [
    {
      title: "",
      description: "",
      videoUrl: "",
      thumbnailUrl: "",
      genre: "",
      duration: "",
      id: "",
    },
  ],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    updateMovieList(state, action: PayloadAction<MovieState[]>) {
      state.movies = action.payload;
    },
    updateMovie(state, action: PayloadAction<MovieState[]>) {
      state.movie = action.payload;
    },
    showModal(state, action: PayloadAction<MovieState[]>) {
      state.showModal = true;
      state.movie = action.payload;
    },
    hideModal(state) {
      state.showModal = false;
      state.movie = [
        {
          title: "",
          description: "",
          videoUrl: "",
          thumbnailUrl: "",
          genre: "",
          duration: "",
          id: "",
        },
      ];
    },
  },
});

const movieActions = movieSlice.actions;

export default movieSlice;
export { movieActions };