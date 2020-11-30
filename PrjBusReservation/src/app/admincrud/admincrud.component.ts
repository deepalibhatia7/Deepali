import { Component, OnInit } from '@angular/core';
import { Buses } from '../Models/Buses.models';
import { BusesService } from '../Services/Buses.services';

@Component({
  selector: 'app-admincrud',
  templateUrl: './admincrud.component.html',
  styleUrls: ['./admincrud.component.css']
})
export class AdmincrudComponent implements OnInit {
  result;
  bus=[];
  constructor(private busService:BusesService) { }

  ngOnInit(): void {
    this.fetchdata();
  }

  //GET BUS DATA FROM DATABASE
  fetchdata()
  {
    debugger;
    console.log("hai");
   this.busService.getBusData().subscribe((data:any)=>{this.bus=data;})
  }
  //POST DATA INTO BUS TABLE IN DATABASE
  buses:any={};
  insertBus()
  {
    debugger;
    
    this.busService.postBus(this.buses).subscribe((data)=>{this.result=data;console.log(this.result);
    window.alert("Bus added successfully");})
  }
  //DELTE BUS DATA FROM DATABASE
  del;
  deleteBusbyID(id)
  {
    debugger;
    
  this.busService.deleteBus(id).subscribe((data)=>{this.del=data;console.log(this.del);
  window.alert("Bus details deleted successfully");
  this.fetchdata();})
  }
  //UPDATE BUS TABLE
  
  editBusbyID(id)
  {
    debugger;
    this.busService.geteditBusbyID(id).subscribe((data)=>{this.buses=data;})
  }
  updateBusbyID(buses:Buses)
  {
    debugger;
    console.log(buses);
    this.busService.editBus(buses).subscribe((data)=>{this.result=data;})
    window.alert("Bus Record Updated!!!");
  }

}
