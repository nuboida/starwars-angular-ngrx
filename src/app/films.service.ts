import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { Film } from './models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  // https://swapi.dev/api/films - map(data.results)
  // Proxy - map(data.film.results)

  getFilms(): Observable<Film[]> {
    return this.http.get('https://swapi.dev/api/films').pipe(
      map((data: any) => data.results || [])
    )
  }
}
