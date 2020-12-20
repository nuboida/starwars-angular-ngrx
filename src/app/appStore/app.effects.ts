import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs'
import { FilmsService } from '../films.service';
import { Film } from '../models/film';
import {
  fetchFilms,
  fetchFilmsSuccess,
  fetchFilmsFailure
} from './app.actions';

@Injectable()
export class FilmsEffect {

  loadFilms$ = createEffect(() => this.actions$.pipe(
    ofType(fetchFilms),
    mergeMap(() => this.filmsService.getFilms().pipe(
      map((movies: Film[]) => fetchFilmsSuccess({ movies })),
      catchError((err) => of(fetchFilmsFailure({ errorMsg: err.message })))
    ))
  ))

  constructor(private actions$: Actions, private filmsService: FilmsService) { }
}
