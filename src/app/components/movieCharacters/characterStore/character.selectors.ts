import { createSelector } from '@ngrx/store';
import { Character } from '../../../models/character';

const characterCore = (state) => state.characters;

export const charactersLoading = createSelector(
  characterCore,
  (state) => state.loading
);

export const loadedCharacters = createSelector(
  characterCore,
  (state) => state.loaded
)

export const getEntities = createSelector(
  characterCore,
  (state) => state.entities
);

export const movieCharacters = createSelector(
  getEntities,
  (entities) => Object.values(entities) as Character[]
)
