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
using HotelApplication.Models;

namespace HotelApplication.Controllers
{
    public class RoomReportsController : ApiController
    {
        private HotelApplicationContext db = new HotelApplicationContext();

        // GET: api/RoomReports
        public IQueryable<RoomReport> GetRoomReports()
        {
            return db.RoomReports;
        }

        // GET: api/RoomReports/5
        [ResponseType(typeof(RoomReport))]
        public async Task<IHttpActionResult> GetRoomReport(int id)
        {
            RoomReport roomReport = await db.RoomReports.FindAsync(id);
            if (roomReport == null)
            {
                return NotFound();
            }

            return Ok(roomReport);
        }

        // PUT: api/RoomReports/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutRoomReport(int id, RoomReport roomReport)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != roomReport.RoomReportId)
            {
                return BadRequest();
            }

            db.Entry(roomReport).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoomReportExists(id))
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

        // POST: api/RoomReports
        [ResponseType(typeof(RoomReport))]
        public async Task<IHttpActionResult> PostRoomReport(RoomReport roomReport)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.RoomReports.Add(roomReport);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = roomReport.RoomReportId }, roomReport);
        }

        // DELETE: api/RoomReports/5
        [ResponseType(typeof(RoomReport))]
        public async Task<IHttpActionResult> DeleteRoomReport(int id)
        {
            RoomReport roomReport = await db.RoomReports.FindAsync(id);
            if (roomReport == null)
            {
                return NotFound();
            }

            db.RoomReports.Remove(roomReport);
            await db.SaveChangesAsync();

            return Ok(roomReport);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RoomReportExists(int id)
        {
            return db.RoomReports.Count(e => e.RoomReportId == id) > 0;
        }
    }
}