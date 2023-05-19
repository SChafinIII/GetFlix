import useSwr from 'swr';
import { appUseSelector } from "../storage/index";
import { MovieState } from "../storage/movies"; 

import fetcher from '../libs/fetcher';

const useMovieList = () => {
  const { data, error, isLoading } = useSwr('/api/movies', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export function useGetMovie() {
  const movies = appUseSelector(state => state.movies.movies);

  return (id) => {
    const movie = movies.filter(movie => movie.id === id);
    return movie;
  };
}

export default useMovieList;
