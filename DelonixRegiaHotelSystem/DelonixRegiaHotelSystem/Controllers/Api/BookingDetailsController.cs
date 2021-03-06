﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using DelonixRegiaHotelSystem.Models;

namespace DelonixRegiaHotelSystem.Controllers.Api
{
    public class BookingDetailsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/BookingDetails
        public IQueryable<BookingDetails> GetBookingDetails()
        {
            return db.BookingDetails;
        }

        // GET: api/BookingDetails/5
        [ResponseType(typeof(BookingDetails))]
        public async Task<IHttpActionResult> GetBookingDetails(int id)
        {
            BookingDetails bookingDetails = await db.BookingDetails.FindAsync(id);
            if (bookingDetails == null)
            {
                return NotFound();
            }

            return Ok(bookingDetails);
        }

        // PUT: api/BookingDetails/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutBookingDetails(int id, BookingDetails bookingDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bookingDetails.BookingDetailsId)
            {
                return BadRequest();
            }

            db.Entry(bookingDetails).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookingDetailsExists(id))
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

        // POST: api/BookingDetails
        [ResponseType(typeof(BookingDetails))]
        public async Task<IHttpActionResult> PostBookingDetails(BookingDetails bookingDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.BookingDetails.Add(bookingDetails);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = bookingDetails.BookingDetailsId }, bookingDetails);
        }

        // DELETE: api/BookingDetails/5
        [ResponseType(typeof(BookingDetails))]
        public async Task<IHttpActionResult> DeleteBookingDetails(int id)
        {
            BookingDetails bookingDetails = await db.BookingDetails.FindAsync(id);
            if (bookingDetails == null)
            {
                return NotFound();
            }

            db.BookingDetails.Remove(bookingDetails);
            await db.SaveChangesAsync();

            return Ok(bookingDetails);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BookingDetailsExists(int id)
        {
            return db.BookingDetails.Count(e => e.BookingDetailsId == id) > 0;
        }
    }
}