import { createSelector } from '@ngrx/store';
import { Film } from '../models/film';

const AppCore = (state) => state.films;

export const getLoading = createSelector(
  AppCore,
  (state) => state.loading
);

export const getLoaded = createSelector(
  AppCore,
  (state) => state.loaded
);

export const getErrorMessage = createSelector(
  AppCore,
  (state) => state.errMessage
);

export const getselectedFilmId = createSelector(
  AppCore,
  (state) => state.selectedFilmId
)

export const getEntities = createSelector(
  AppCore,
  (state) => state.entities
)

export const getMovies = createSelector(
  getEntities,
  (entities) => Object.values(entities) as Film[]
);

export const getSelectedMovie = createSelector(
  AppCore,
  (state) => {
    if (!state.selectedFilmId) {
      return null;
    } else {
      return state.entities[state.selectedFilmId]
    }
  }
);
