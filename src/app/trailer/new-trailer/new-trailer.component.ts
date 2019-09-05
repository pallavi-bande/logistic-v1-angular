import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{HttpHeaders,HttpClient} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
 };

@Component({
  selector: 'app-new-trailer',
  templateUrl: './new-trailer.component.html',
  styleUrls: ['./new-trailer.component.css']
})
export class NewTrailerComponent implements OnInit {
  TrailerForm = new FormGroup({
    trailer_number: new FormControl('',Validators.required),
    trailer_statuses_id: new FormControl('',Validators.required)
  });
  constructor(private http:HttpClient) { }
  submit() {
    console.warn(this.TrailerForm.value);
    this.http.post("http://localhost/logistic_v1/api/trailers.json", this.TrailerForm.value, httpOptions)
      .pipe().subscribe(data => {
        console.log(data);
      });
  }

  get trailer_number(){ return this.TrailerForm.get('trailer_number');}
  get trailer_statuses_id(){ return this.TrailerForm.get('trailer_statuses_id');}

  ngOnInit() {
  }

}
