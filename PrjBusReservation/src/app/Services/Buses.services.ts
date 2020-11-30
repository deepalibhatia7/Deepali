import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Buses} from '../Models/Buses.models';

@Injectable({ providedIn: "root" })
export class BusesService {
    
    formdata:Buses;
    list:Buses[];
    constructor(private http: HttpClient) {
    this.list=[];

    }
    //GET METHOD(BUS TABLE DATA)
    public getBusData()
    {
        
        return this.http.get("https://localhost:44397/api/Buses");
    }
    //CustomQuery
    public searchBusList(Source_Station,Destination)
    {
        return this.http.get("https://localhost:44397/api/CustomQuery?Source_Station="+Source_Station+"&Destination="+Destination);
    }
    //POST METHOD
    public postBus(bus)
    {
        console.log(bus);
        debugger;
        return this.http.post("https://localhost:44397/api/Buses",bus);
    }
    //DELETE METHOD
    public deleteBus(id)
    {
        debugger;
       return this.http.delete("https://localhost:44397/api/Buses?id="+id);
     }

     //PUT METHOD
     public putBus(bus:Buses)
    {
        debugger;
       return this.http.put("https://localhost:44397/api/Buses/"+bus.Bus_Id,bus);
     }

     //PUT BUS METHOD

     public geteditBusbyID(id)
          {
         return this.http.get("https://localhost:44397/api/Buses/"+id);
     }
     public editBus(busess:Buses)
    {
        debugger;
       return this.http.put("https://localhost:44397/api/Buses/"+busess.Bus_Id,busess);
     }
}