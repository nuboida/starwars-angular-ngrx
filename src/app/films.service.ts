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

  getFilms(): Observable<Film[]> {
    return this.http.get('https://swapi.dev/api/films').pipe(
      map((data: any) => data.results || [])
    )
  }
}
