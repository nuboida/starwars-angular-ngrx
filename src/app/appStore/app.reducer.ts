import { createReducer, on } from '@ngrx/store';
import { appState } from '../models/app.state';
import { Film } from '../models/film';
import {
  fetchFilms,
  fetchFilmsSuccess,
  fetchFilmsFailure
} from './app.actions';

const initialState: appState = {
  loaded: false,
  loading: false,
  movies: [],
  errorMessage: ''
}

const _filmsReducer = createReducer(
  initialState,
  on(fetchFilms, (state) => {
    return {
      ...state,
      loading: true,
    }
  }),

  on(fetchFilmsSuccess, (state, { movies }) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      movies: [...movies]
    }
  }),

  on(fetchFilmsFailure, (state, { errorMsg }) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      errorMessage: errorMsg
    }
  })
)

export const FilmsReducer = (state, action) => {
  return _filmsReducer(state, action)
}
