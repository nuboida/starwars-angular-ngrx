import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { from, Observable, } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { Character } from 'src/app/models/character';
import { charactersLoaded, getCharacter, resetCharacter } from './characterStore/character.action';
import { charactersLoading, loadedCharacters, movieCharacters } from './characterStore/character.selectors';

@Component({
  selector: 'movieCharacters',
  templateUrl: './movieCharacters.component.html',
  styleUrls: ['./movieCharacters.component.scss'],
  inputs: ['charactersUrl']
})
export class MovieCharactersComponent implements OnInit, OnChanges {
  charactersUrl: string[];
  loading$: Observable<boolean> = this.store.pipe(select(charactersLoading));
  loaded$: Observable<boolean> = this.store.pipe(select(loadedCharacters));
  characters$: Observable<Character[]> = this.store.pipe(select(movieCharacters))

  constructor(private http: HttpClient, private store: Store) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    let currCharacters = changes.charactersUrl.currentValue;

    this.store.dispatch(resetCharacter());

    from(currCharacters).pipe(
      mergeMap((currUrl: string) => this.http.get(currUrl).pipe(
        // on Proxy change to map(data.data)
        // on Swapi - map(data);
        map((data: any) => data || {})
      )),
      toArray()
    ).subscribe(xters => {
      this.store.dispatch(getCharacter({ character: xters }));
      this.store.dispatch(charactersLoaded());
    })
  }
}
