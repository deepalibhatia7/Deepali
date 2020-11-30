import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SearchPipe} from '../app/Pipes/BusSearch.pipe'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusEnquiryComponent } from './bus-enquiry/bus-enquiry.component';
import { BusSelectComponent } from './bus-select/bus-select.component';
import { BusesService } from './Services/Buses.services';
import { OrderPipe } from 'ngx-order-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdmincrudComponent } from './admincrud/admincrud.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserlayoutComponent } from './userlayout/userlayout.component';
import { LoginService } from './Services/login.service';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
//import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { SeatmapreservationComponent } from './seatmapreservation/seatmapreservation.component';
import { CancelService } from './Services/cancel.service';
import { RegistrationService } from './Services/registration.service';
import { SeatMappingService } from './Services/SeatMapping.services';

@NgModule({
  declarations: [
    AppComponent,
    BusEnquiryComponent,
    BusSelectComponent,
    SearchPipe,
    AdmincrudComponent,
    AdminlayoutComponent,
    AboutusComponent,
    FeedbackComponent,
    HomeComponent,
    ResetPasswordComponent,
    UserlayoutComponent,
    LoginComponent,
    RegistrationComponent,
    //ForgotPasswordComponent,
    SeatBookingComponent,
    SeatmapreservationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BusesService,OrderPipe,LoginService,CancelService,RegistrationService,SeatMappingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
