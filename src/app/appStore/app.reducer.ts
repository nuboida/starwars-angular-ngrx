import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { fetchFilms, fetchFilmsFailure, fetchFilmsSuccess, selectFilmById } from './app.actions';
import { Film } from '../models/film';
import { appState } from '../models/app.state';

export const adapter: EntityAdapter<Film> = createEntityAdapter<Film>({
  selectId: (film: Film) => film.episode_id,
  sortComparer: false,
});

export const initialState: appState = adapter.getInitialState({
  loading: false,
  loaded: false,
  errMessage: '',
  selectedFilmId: null
});

const _FilmsReducer = createReducer(
  initialState,
  on(fetchFilms, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(fetchFilmsSuccess, (state, { movies }) => {
    return adapter.addMany(movies, { ...state, loading: false, loaded: true })
  }),
  on(fetchFilmsFailure, (state, { errorMsg }) => {
    return {
      ...state,
      errMessage: errorMsg
    }
  }),
  on(selectFilmById, (state, { filmId }) => {
    return {
      ...state,
      selectedFilmId: filmId
    }
  })
);

export const FilmsReducer = (state, action) => {
  return _FilmsReducer(state, action);
}
