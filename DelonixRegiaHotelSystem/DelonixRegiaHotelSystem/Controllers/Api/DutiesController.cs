using System;
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
    public class DutiesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Duties
        public IQueryable<Duty> GetDuties()
        {
            return db.Duties;
        }

        // GET: api/Duties/5
        [ResponseType(typeof(Duty))]
        public async Task<IHttpActionResult> GetDuty(int id)
        {
            Duty duty = await db.Duties.FindAsync(id);
            if (duty == null)
            {
                return NotFound();
            }

            return Ok(duty);
        }

        // PUT: api/Duties/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutDuty(int id, Duty duty)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != duty.Id)
            {
                return BadRequest();
            }

            db.Entry(duty).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DutyExists(id))
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

        // POST: api/Duties
        [ResponseType(typeof(Duty))]
        public async Task<IHttpActionResult> PostDuty(Duty duty)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Duties.Add(duty);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = duty.Id }, duty);
        }

        // DELETE: api/Duties/5
        [ResponseType(typeof(Duty))]
        public async Task<IHttpActionResult> DeleteDuty(int id)
        {
            Duty duty = await db.Duties.FindAsync(id);
            if (duty == null)
            {
                return NotFound();
            }

            db.Duties.Remove(duty);
            await db.SaveChangesAsync();

            return Ok(duty);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DutyExists(int id)
        {
            return db.Duties.Count(e => e.Id == id) > 0;
        }
    }
}