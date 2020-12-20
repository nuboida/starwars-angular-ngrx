import { createAction, props } from '@ngrx/store';
import { Film } from '../models/film';

export const fetchFilms = createAction(
  '[App Component] Fetch Films'
);

export const fetchFilmsSuccess = createAction(
  '[App Component] Fetch Films Successful',
  props<{ movies: Film[] }>()
);

export const fetchFilmsFailure = createAction(
  '[App Component] Fetch Films Failed]',
  props<{ errorMsg: string }>()
);
