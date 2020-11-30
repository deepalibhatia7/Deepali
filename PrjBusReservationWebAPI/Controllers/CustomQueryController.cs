using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PrjBusReservationWebAPI.Models;

namespace PrjBusReservationWebAPI.Controllers
{
    public class CustomQueryController : ApiController
    {
        BusTeamEntities db = new BusTeamEntities();
        
        [HttpGet]
        public IHttpActionResult SearchBusData(string Source_Station, string Destination)
        {
            var b = (from ss in db.Buses
                     where ss.Source_Station == Source_Station && ss.Destination == Destination
                     
                     select new
                     {
                         Bus_Id = ss.Bus_Id,
                         Bus_Number = ss.Bus_Number,
                         Bus_Name = ss.Bus_Name,
                         Source_station = ss.Source_Station,
                         Destination = ss.Destination,
                         Available_number_of_seats = ss.Available_number_of_seats,
                         Total_Tickets= ss.Total_Tickets
                     }).ToList();
            return Ok(b);

        }
    }
}
