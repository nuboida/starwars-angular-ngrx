import { Film } from './film';

export interface appState {
  loaded: boolean;
  loading: boolean;
  movies: Film[];
  errorMessage: '';
}
