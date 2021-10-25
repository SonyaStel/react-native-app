import axios from 'axios';
import {GET_MOVIES_STERT, GET_MOVIES_SUCCESS, GET_MOVIES_FAIL} from './types';

export const getMovies = () => dispatch => {
  dispatch(getMoviesStart());
  return axios
    .get('https://swapi.dev/api/films/')
    .then(function (response) {
      dispatch(getMoviesSuccess(response.data.results));
    })
    .catch(function (error) {
      dispatch(getMoviesFail());
      console.log(error);
    });
};

export const getMoviesStart = () => ({
  type: GET_MOVIES_STERT,
});

export const getMoviesFail = () => ({
  type: GET_MOVIES_FAIL,
});

export const getMoviesSuccess = data => ({
  type: GET_MOVIES_SUCCESS,
  data,
});
