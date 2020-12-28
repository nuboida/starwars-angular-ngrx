import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';

@Component({
  selector: 'filmDetails',
  templateUrl: './filmDetails.component.html',
  styleUrls: ['./filmDetails.component.scss'],
  inputs: ['film']
})
export class FilmDetailsComponent implements OnInit {
  film: Film
  constructor() { }

  ngOnInit() {
  }

}
