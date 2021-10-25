import {ADD_TASK, DELETE_TASK} from '../actions/types';

const initialState = {
  test: 'AAAAAA',
  list: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        list: state.list.concat({
          key: Math.random(),
          name: action.data,
        }),
      };

    case DELETE_TASK:
      return {
        ...state,
      };
    default:
      return state;
  }
};
