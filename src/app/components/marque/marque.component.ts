import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.scss'],
  inputs: ['text']
})
export class MarqueComponent implements OnInit {
  text: string;
  constructor() { }

  ngOnInit() {
  }

}
