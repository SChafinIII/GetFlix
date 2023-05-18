import React, { useEffect } from 'react';
import Head from "next/head";
import { NextPage, NextPageContext } from 'next';
import { getSession, signOut } from "next-auth/react";
import { profileActions } from "../storage/profiles";
import { movieActions } from "../storage/movies";
import { appUseDispatch } from "../storage/index";
import useCurrentUser from "../hooks/useCurrentUser";
import useMovieList from "../hooks/useMovieList";
import useFavorites from "../hooks/useFavorites";

import Navbar from '../components/naviBar';
import Billboard from '../components/board';
import MovieList from "../components/movieList";
import InfoModal from '../components/iModal';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    };
  }

  return {
    props: {}
  };
}

const Home: NextPage = () => {
  const dispatch = appUseDispatch();
  const { data: currentUser } = useCurrentUser();
  const { data: moviesList = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();

  useEffect(() => {
    dispatch(profileActions.updateProfile(currentUser));
  }, [currentUser, dispatch]);

  useEffect(() => {
    dispatch(movieActions.updateMovieList(moviesList));
  }, [moviesList, dispatch]);

  if (moviesList.length === 0) {
    return (
      <div className="relative w-[100vw] h-[100vh] bg-black">
        <img className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" src="images/loading.gif" alt="Loading spinner" />
      </div>
    );
  } else {
    return (
      <>
        <Head>
          <link rel="shortcut icon" href="/images/favicon.png" />
        </Head>
        <InfoModal onClose={() => {}} />
        <Navbar />
        <Billboard />
        <div className="pb-40">
          <MovieList title="Trending Now" data={moviesList} />
          <MovieList title="My List" data={favorites} />
        </div>
      </>
    );
  }
};

export default Home;
