import { Injectable } from '@angular/core';

import { Hotel } from '../model/hotel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddHotelService {

  private addHotelUrl = "http://localhost:8001/catalogue";

  constructor( private http:HttpClient) {
    
   }

  addHotel(hotel:Hotel){
    return this.http.post<string>(this.addHotelUrl+"/add-hotel",hotel);
  }
}
