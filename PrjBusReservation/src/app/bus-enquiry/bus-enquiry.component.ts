import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Buses } from '../Models/Buses.models';
import { BusesService } from '../Services/Buses.services';

@Component({
  selector: 'app-bus-enquiry',
  templateUrl: './bus-enquiry.component.html',
  styleUrls: ['./bus-enquiry.component.css']
})
export class BusEnquiryComponent implements OnInit {
  SearchForm:FormGroup;
  Start_Date:any;
  End_Date: any;
  today = new Date();
  source: string;
  destination: string;
  todayShort = new Date().toISOString().slice(0,10);
  submitted:boolean=false
   busess:Buses[]=[];
   buses: Buses;
  constructor(private formbuilder:FormBuilder, private httpService:BusesService,private router:Router) {

   }

  ngOnInit(): void {

    this.getBusesdata();

  }

  getBusesdata()
  {
    debugger;
    console.log("inside");
    
    this.httpService.getBusData().subscribe(
      (data:any)=>{this.busess= data;
      console.log(this.busess);},
      (error)=>{alert("Failed to fetch data from server.")
    });
    localStorage.clear();
    this.SearchForm=this.formbuilder.group({
    bustype:['',Validators.required],
    source:['',Validators.required],
    destination:['',Validators.required],
    Start_Date:['',Validators.required],
    End_Date:['']
  });
  this.SearchForm.controls['End_Date'].disable();
  }
  DisableReturn()
  {
    debugger;
    this.SearchForm.controls['End_Date'].disable();
  }
  EnableReturn()
  {
    debugger;
    this.SearchForm.controls['End_Date'].enable();
  }

  onSubmit(form)
  {
    debugger;
    if(form.invalid)
    {
      alert("Please enter all required details");
      return;
    }
    console.log(form.source);
    localStorage.setItem('type',form.source);
    localStorage.setItem('destination',form.destination);
    localStorage.setItem('Start_Date',form.startdate);
    localStorage.setItem('End_Date',form.enddate);
    //this.router.navigate(['busSelect']);
  }

}
