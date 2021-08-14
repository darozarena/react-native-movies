/* eslint-disable react-hooks/exhaustive-deps */
import {useState} from 'react';
import {MovieFull} from '../interfaces/movieFullInterface';
import movieDB from '../api/movieDB';
import {useEffect} from 'react';
import {Cast, CreditsResponse} from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const movieCreditsPromise = movieDB.get<CreditsResponse>(
      `/${movieId}/credits`,
    );

    const [movieDetailsResp, castResp] = await Promise.all([
      movieDetailsPromise,
      movieCreditsPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...state};
};
