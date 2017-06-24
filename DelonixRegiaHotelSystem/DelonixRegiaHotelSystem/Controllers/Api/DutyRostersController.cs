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
    public class DutyRostersController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/DutyRosters
        public IQueryable<DutyRoster> GetDutyRosters()
        {
            return db.DutyRosters;
        }

        // GET: api/DutyRosters/5
        [ResponseType(typeof(DutyRoster))]
        public async Task<IHttpActionResult> GetDutyRoster(int id)
        {
            DutyRoster dutyRoster = await db.DutyRosters.FindAsync(id);
            if (dutyRoster == null)
            {
                return NotFound();
            }

            return Ok(dutyRoster);
        }

        // PUT: api/DutyRosters/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutDutyRoster(int id, DutyRoster dutyRoster)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != dutyRoster.DutyRosterId)
            {
                return BadRequest();
            }

            db.Entry(dutyRoster).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DutyRosterExists(id))
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

        // POST: api/DutyRosters
        [ResponseType(typeof(DutyRoster))]
        public async Task<IHttpActionResult> PostDutyRoster(DutyRoster dutyRoster)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.DutyRosters.Add(dutyRoster);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = dutyRoster.DutyRosterId }, dutyRoster);
        }

        // DELETE: api/DutyRosters/5
        [ResponseType(typeof(DutyRoster))]
        public async Task<IHttpActionResult> DeleteDutyRoster(int id)
        {
            DutyRoster dutyRoster = await db.DutyRosters.FindAsync(id);
            if (dutyRoster == null)
            {
                return NotFound();
            }

            db.DutyRosters.Remove(dutyRoster);
            await db.SaveChangesAsync();

            return Ok(dutyRoster);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DutyRosterExists(int id)
        {
            return db.DutyRosters.Count(e => e.DutyRosterId == id) > 0;
        }
    }
}