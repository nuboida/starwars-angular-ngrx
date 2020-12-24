import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'filmSelect',
  templateUrl: './filmSelect.component.html',
  styleUrls: ['./filmSelect.component.scss'],
  inputs: ['films', 'errorMsg'],
  outputs: ['getFilm']
})
export class FilmSelectComponent implements OnInit {
  films: object[];
  errorMsg: string;
  getFilm: EventEmitter<number>
  constructor() {
    this.getFilm = new EventEmitter();
  }

  ngOnInit() {
  }

  handleSelectChange(value) {
    this.getFilm.emit(value);
  }
}
