import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: Object;
  loading: boolean

  constructor(public http: HttpClient) {

  }
  makeRequest(): void {
    this.loading = true;
    this.http.get('/api/films')
      .subscribe((res) => {
        this.data = res;
        this.loading = false;
      })
  }
}
