import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FilmsReducer } from './appStore/app.reducer';
import { FilmsEffect } from './appStore/app.effects';
import { CharacterReducer } from './components/movieCharacters/characterStore/character.reducer';

import { AppComponent } from './app.component';
import { FilmSelectComponent } from './components/filmSelect/filmSelect.component';
import { FilmDetailsComponent } from './components/filmDetails/filmDetails.component';
import { MarqueComponent } from './components/marque/marque.component';
import { MovieCharactersComponent } from './components/movieCharacters/movieCharacters.component';
import { CharactersComponent } from './components/characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmSelectComponent,
    FilmDetailsComponent,
    MarqueComponent,
    MovieCharactersComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      films: FilmsReducer,
      characters: CharacterReducer
    }),
    StoreDevtoolsModule.instrument({
      name: 'Ngrx Starwars app'
    }),
    EffectsModule.forRoot([FilmsEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
