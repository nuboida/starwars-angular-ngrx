import { EntityState } from '@ngrx/entity';
import { Character } from './character';


export interface characterState extends EntityState<Character> {
  loading: boolean;
  loaded: boolean;
  errorMsg: string;
}
