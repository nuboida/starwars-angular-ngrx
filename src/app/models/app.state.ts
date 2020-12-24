import { EntityState } from '@ngrx/entity';
import { Film } from './film';

export interface appState extends EntityState<Film> {
  loading: boolean;
  loaded: boolean;
  errMessage: string;
  selectedFilmId: string;
}
