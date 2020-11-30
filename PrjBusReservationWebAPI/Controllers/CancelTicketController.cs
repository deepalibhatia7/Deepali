using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PrjBusReservationWebAPI.Models;

namespace PrjBusReservationWebAPI.Controllers
{
    public class CancelTicketController : ApiController
    {
        BusTeamEntities db = new BusTeamEntities();
        [HttpGet]
        public IHttpActionResult sp_cancelTicket(string Email)
        {
            var ticketdetails = db.sp_cancelTicket(Email).ToString();
            if (ticketdetails != null)
                return Ok(ticketdetails);
            else
                return BadRequest("No Data Found");
        }

    }
}
