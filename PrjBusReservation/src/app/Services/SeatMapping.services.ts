import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { SMmodel } from '../Models/SeatMapping.model';


@Injectable({providedIn:"root"})

export class SeatMappingService
{
    list:SMmodel[];
    constructor(private http:HttpClient)
    {
        this.list=[];
    }
    public getSeat(Bus_Id,Ticketsbooked)
    {
        debugger;
        return this.http.get("https://localhost:44397/api/SeatMapping?Bus_Id="+Bus_Id+"&Available_number_of_seats="+Ticketsbooked);
    }
}