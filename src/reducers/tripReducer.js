import {
  GET_MOVIES_FAIL,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_STERT,
} from '../actions/types';

const initialState = {
  movies: [],
  loading: false,
};

export const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_STERT:
      return {
        ...state,
        loading: true,
      };

    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.data,
        loading: false,
      };

    case GET_MOVIES_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
