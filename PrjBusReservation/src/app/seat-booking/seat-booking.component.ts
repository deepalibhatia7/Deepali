import { Component, OnInit } from '@angular/core';
import { SeatMappingService } from '../Services/SeatMapping.services';

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css']
})
export class SeatBookingComponent implements OnInit {
  Seats;
  Bus;
  constructor(private seatservice:SeatMappingService) { }

  ngOnInit(): void {
  }

  fetchdata(Bus_Id,Ticketsbooked)
  {
    console.log ("enter your busid");
    debugger;
    this.seatservice.getSeat(Bus_Id,
      Ticketsbooked).subscribe(
      (data)=>{this.Seats=data;}
    )
  }

}
