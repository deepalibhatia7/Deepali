using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PrjBusReservationWebAPI.Models;

namespace PrjBusReservationWebAPI.Controllers
{
    public class RegistrationController : ApiController
    {
        BusTeamEntities db = new BusTeamEntities();
        [HttpPost]
        // POST: api/Registrations
        //[ResponseType(typeof(Registration))]
        public IHttpActionResult PostRegistration(Registration registration)
        {
            /* if (!ModelState.IsValid)
             {
                 return BadRequest(ModelState);
             }*/
            Registration userTable = new Registration();
            userTable.First_Name = registration.First_Name;
            userTable.User_Name = registration.User_Name;
            userTable.Email = registration.Email;
            userTable.Password = registration.Password;

            userTable.Age = registration.Age;
            userTable.Gender = registration.Gender;
            userTable.Phone_Number = registration.Phone_Number;

            db.Registrations.Add(userTable);
            db.SaveChanges();
            return CreatedAtRoute("DefaultApi", new { id = registration.Registration_Id }, registration);
        }
        //    [HttpGet]
        //    public IHttpActionResult Login(string Email, string Password)
        //    {
        //        if (!ModelState.IsValid)
        //        {
        //            return BadRequest(ModelState);
        //        }
        //        var isValidUser = false;
        //        var user = db.Registrations.Where(w => w.Email == Email && w.Password == Password).FirstOrDefault();
        //        if (user != null)
        //            isValidUser = true;

        //        var model = new
        //        {
        //            IsValidUser = isValidUser,
        //            UserId = user != null ? user.Registration_Id : 0,
        //            UserName = user != null ? user.First_Name : ""
        //        };
        //        return Ok(model);
        //    }
        //}

    }
}
