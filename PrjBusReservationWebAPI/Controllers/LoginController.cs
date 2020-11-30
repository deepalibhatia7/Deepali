using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PrjBusReservationWebAPI.Models;

namespace PrjBusReservationWebAPI.Controllers
{
    public class LoginController : ApiController
    {
        BusTeamEntities db = new BusTeamEntities();
        [HttpPost]
        public HttpResponseMessage verifylogin(Registration logininfo)
        {
            var user = (from registration in db.Registrations
                        where registration.Email == logininfo.Email && registration.Password == logininfo.Password
                        select registration.Email).FirstOrDefault();
            if (user != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, user);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.OK, "Invalid");
            }
        }

    }
}
