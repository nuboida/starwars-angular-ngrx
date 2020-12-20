import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filmSelect',
  templateUrl: './filmSelect.component.html',
  styleUrls: ['./filmSelect.component.scss'],
  inputs: ['films', 'errorMsg']
})
export class FilmSelectComponent implements OnInit {
  films: object[];
  errorMsg: string;
  constructor() { }

  ngOnInit() {
  }

}
