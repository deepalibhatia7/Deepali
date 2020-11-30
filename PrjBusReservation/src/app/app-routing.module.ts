import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdmincrudComponent } from './admincrud/admincrud.component';
import { BusEnquiryComponent } from './bus-enquiry/bus-enquiry.component';
import { BusSelectComponent } from './bus-select/bus-select.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { SeatmapreservationComponent } from './seatmapreservation/seatmapreservation.component';
import { LoginService } from './Services/login.service';

const routes: Routes = [
  {path:"",redirectTo:'/BusEnquiry',pathMatch:'full'},
  {path:"BusEnquiry" , component:BusEnquiryComponent},
  {path:"busSelect",component:BusSelectComponent},
  {path:"AdminCrud",component:AdmincrudComponent},
  {path:"Aboutus",component:AboutusComponent},
  {path:"Feedback",component:FeedbackComponent},
  {path:"Home",component:HomeComponent},
  {path:"Login",component:LoginComponent},
  {path:"Registration",component:RegistrationComponent},
  {path:"SeatBooking",component:SeatBookingComponent},
  {path:"SeatMapping",component:SeatmapreservationComponent},
  {path:"BusEnquiry",component:BusEnquiryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
