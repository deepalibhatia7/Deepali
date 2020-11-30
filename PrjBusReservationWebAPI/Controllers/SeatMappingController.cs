using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PrjBusReservationWebAPI.Models;

namespace PrjBusReservationWebAPI.Controllers
{
    public class SeatMappingController : ApiController
    {
        BusTeamEntities db = new BusTeamEntities();

        [HttpGet]
        public IHttpActionResult GetSeatavailabletickets(int Bus_Id, int Available_number_of_seats)
        {
            db.sp_availabletickets(Bus_Id, Available_number_of_seats);
            db.SaveChanges();

            var avtickets = (from b in db.Buses
                             where b.Bus_Id == Bus_Id
                             select b.Available_number_of_seats).FirstOrDefault();
            if (avtickets != null)
            {
                //  return Ok((avtickets));
                return Ok((avtickets - Available_number_of_seats));
            }
            else
            {
                return BadRequest("Invalid Booking");
            }
        }
        // [HttpGet]
        //public IHttpActionResult GetSeatavailabletickets(int Bus_id, int Available_number_of_seats)

    }
}
