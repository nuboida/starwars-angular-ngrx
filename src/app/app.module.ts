import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FilmsReducer } from './appStore/app.reducer';
import { FilmsEffect } from './appStore/app.effects';

import { AppComponent } from './app.component';
import { FilmSelectComponent } from './components/filmSelect/filmSelect.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmSelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      films: FilmsReducer
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
