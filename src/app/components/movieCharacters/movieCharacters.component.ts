import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { from, } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'movieCharacters',
  templateUrl: './movieCharacters.component.html',
  styleUrls: ['./movieCharacters.component.scss'],
  inputs: ['charactersUrl']
})
export class MovieCharactersComponent implements OnInit, OnChanges {
  charactersUrl: string[];
  characters: Character[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    /*  from(this.charactersUrl).pipe(
       mergeMap(url => this.http.get(url).pipe(
         map((data: any) => data.data || {})
       )),
       toArray()
     ).subscribe(xters => {
       this.characters = xters
     }) */
  }

  ngOnChanges(changes: SimpleChanges) {
    let currCharacters = changes.charactersUrl.currentValue;
    from(currCharacters).pipe(
      mergeMap((currUrl: string) => this.http.get(currUrl).pipe(
        map((data: any) => data.data || {})
      )),
      toArray()
    ).subscribe(xters => {
      this.characters = xters
    })
  }
}
