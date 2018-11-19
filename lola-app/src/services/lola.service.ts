import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
// import { Observable } from 'rxjs/Observable';
// import * as seats from "../../lola_seats/data/seats.json"

@Injectable({
  providedIn: 'root'
})
export class LolaService {

  constructor(private http: HttpClient) {}

  getSeat() {
    return this.http.get('src/data/seats.json');
  }
}
