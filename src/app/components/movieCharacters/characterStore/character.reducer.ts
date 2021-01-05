import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { charactersLoaded, getCharacter, resetCharacter } from './character.action';
import { Character } from '../../../models/character';
import { characterState } from '../../../models/character.state';

export const adapter: EntityAdapter<Character> = createEntityAdapter({
  selectId: (character: Character) => character.name,
  sortComparer: false
});

export const initialState: characterState = adapter.getInitialState({
  loaded: false,
  loading: false,
  errorMsg: ''
});

const _characterReducer = createReducer(
  initialState,
  on(getCharacter, (state, { character }) => {
    return adapter.addMany(character, state);
  }),
  on(resetCharacter, (state) => {
    return adapter.removeAll({ ...state, loading: true, loaded: false });
  }),
  on(charactersLoaded, (state) => {
    return {
      ...state,
      loading: false,
      loaded: true
    }
  })
);

export const CharacterReducer = (state, action) => {
  return _characterReducer(state, action)
}
