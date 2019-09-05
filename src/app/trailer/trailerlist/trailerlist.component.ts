import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trailerlist',
  templateUrl: './trailerlist.component.html',
  styleUrls: ['./trailerlist.component.css']
})
export class TrailerlistComponent implements OnInit {
  trailers = [];
  constructor(private http: HttpClient) { 

    this.http.get("http://localhost/logistic_v1/api/trailers.json").subscribe( data => {
      
      console.log(data);

      this.trailers = data['data'];

    });
  }
  ngOnInit() {
  }

}
