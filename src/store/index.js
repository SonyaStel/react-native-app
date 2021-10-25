import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {appReducer} from '../reducers/appReducer';
import {tripReducer} from '../reducers/tripReducer';
import {trip2Reducer} from '../reducers/trip2Reducer';

const rootReducer = combineReducers({
  appReducer,
  tripReducer,
  trip2Reducer,
});

const configureStore = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware),
);

const getStore = () => {
  if (!configureStore) {
    throw new Error(
      'redux store is not defined, use function withAppStore or withMockStore',
    );
  }
  return configureStore;
};

const store = getStore();

export default store;
