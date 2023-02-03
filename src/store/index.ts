import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import {appProcess} from './app-process/app-process';

export const api = createAPI();

export const createStore = (initialState = {}) => configureStore({
  reducer: appProcess.reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
  preloadedState: initialState
});

export const store = createStore();
