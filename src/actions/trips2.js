import axios from 'axios';
import {
  GET_PLANETS_FAIL,
  GET_PLANETS_START,
  GET_PLANETS_SUCCESS,
} from './types';

export const getPlanets = () => dispatch => {
  dispatch(getPlanetsStart());
  return axios
    .get('https://swapi.dev/api/planets')
    .then(function (response) {
      dispatch(getPlanetsSuccess(response.data.results));
    })
    .catch(function (error) {
      dispatch(getPlanetsFail());
      console.log(error);
    });
};

export const getPlanetsStart = () => ({
  type: GET_PLANETS_START,
});

export const getPlanetsFail = () => ({
  type: GET_PLANETS_FAIL,
});

export const getPlanetsSuccess = data => ({
  type: GET_PLANETS_SUCCESS,
  data,
});
