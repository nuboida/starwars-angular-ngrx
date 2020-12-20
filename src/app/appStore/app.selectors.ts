import { createSelector } from '@ngrx/store';

const AppCore = (state) => state.films;

export const getLoading = createSelector(
  AppCore,
  (state) => state.loading
);

export const getLoaded = createSelector(
  AppCore,
  (state) => state.loaded
);

export const getMovies = createSelector(
  AppCore,
  (state) => state.movies
);

export const getErrorMessage = createSelector(
  AppCore,
  (state) => state.errorMessage
);
