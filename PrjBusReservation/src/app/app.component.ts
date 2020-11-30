import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
//import * as $ from 'jquery' ;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrjBusReservation';

  constructor(private authservice:AuthService)
  
  {
  }
  ngOnInit(): void {
    var $myCarousel = $('#mycarousel');
    $myCarousel.carousel(
      {
        interval:5000,pause: 'none'
      }
    );
  }

}
