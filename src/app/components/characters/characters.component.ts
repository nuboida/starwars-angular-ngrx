import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  inputs: ['characters']
})
export class CharactersComponent implements OnInit {
  characters: Character[]
  constructor() { }

  ngOnInit() {
  }
}
