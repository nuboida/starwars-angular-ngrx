import { createAction, props } from '@ngrx/store';
import { Character } from '../../../models/character';

export const getCharacter = createAction(
  '[MovieCharacter Component] get character',
  props<{ character: Character[] }>()
);

export const resetCharacter = createAction(
  '[MovieCharacter Component] reset characters'
);

export const charactersLoaded = createAction(
  '[MovieCharacter Component] characters loaded',
)
