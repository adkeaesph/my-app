import { Component, OnInit } from '@angular/core';
import { Hotel } from '../model/hotel';
import { AddHotelService } from '../services/add-hotel.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
 
  hotel: Hotel;

  constructor(private service:AddHotelService) { 
    this.hotel = new Hotel();
  }

  ngOnInit() {
  }

  onSubmit(){
   // console.log(this.hotel);
   this.service.addHotel(this.hotel)
   .subscribe(
     response=>(
       console.log(response)
     )
   ) 
  }

}
