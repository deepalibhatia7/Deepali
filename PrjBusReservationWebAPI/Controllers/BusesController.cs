﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using PrjBusReservationWebAPI.Models;

namespace PrjBusReservationWebAPI.Controllers
{
    public class BusesController : ApiController
    {
        private BusTeamEntities db = new BusTeamEntities();

        // GET: api/Buses
        public IQueryable<Bus> GetBuses()
        {
            return db.Buses;
        }

        // GET: api/Buses/5
        [ResponseType(typeof(Bus))]
        public IHttpActionResult GetBus(int id)
        {
            Bus bus = db.Buses.Find(id);
            if (bus == null)
            {
                return NotFound();
            }

            return Ok(bus);
        }

        // PUT: api/Buses/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBus(int id, Bus bus)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bus.Bus_Id)
            {
                return BadRequest();
            }

            db.Entry(bus).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BusExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Buses
        [ResponseType(typeof(Bus))]
        public IHttpActionResult PostBus(Bus bus)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Buses.Add(bus);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = bus.Bus_Id }, bus);
        }

        // DELETE: api/Buses/5
        [ResponseType(typeof(Bus))]
        public IHttpActionResult DeleteBus(int id)
        {
            Bus bus = db.Buses.Find(id);
            if (bus == null)
            {
                return NotFound();
            }

            db.Buses.Remove(bus);
            db.SaveChanges();

            return Ok(bus);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BusExists(int id)
        {
            return db.Buses.Count(e => e.Bus_Id == id) > 0;
        }
    }
}