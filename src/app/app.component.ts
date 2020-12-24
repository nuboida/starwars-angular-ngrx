import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { appState } from './models/app.state';
import { Film } from './models/film';
import { fetchFilms, selectFilmById } from './appStore/app.actions';
import { Observable } from 'rxjs';
import {
  getLoaded,
  getLoading,
  getErrorMessage,
  getMovies,
  getSelectedMovie
} from './appStore/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  films$: Observable<Film[]> = this.store.pipe(select(getMovies));
  loaded$: Observable<boolean> = this.store.pipe(select(getLoaded));
  loading$: Observable<boolean> = this.store.pipe(select(getLoading));
  errorMsg$: Observable<string> = this.store.pipe(select(getErrorMessage));
  film$: Observable<Film> = this.store.pipe(select(getSelectedMovie)) || null;
  constructor(private store: Store<appState>) { }

  ngOnInit() {
    this.store.dispatch(fetchFilms())
  }

  getFilmId(value: string) {
    this.store.dispatch(selectFilmById({ filmId: value }))
  }
}
