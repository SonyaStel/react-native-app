import {
  GET_PLANETS_FAIL,
  GET_PLANETS_SUCCESS,
  GET_PLANETS_START,
} from '../actions/types';

const initialState = {
  planets: [],
  loading: false,
};

export const trip2Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANETS_START:
      return {
        ...state,
        loading: true,
      };

    case GET_PLANETS_SUCCESS:
      return {
        ...state,
        planets: action.data,
        loading: false,
      };

    case GET_PLANETS_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
