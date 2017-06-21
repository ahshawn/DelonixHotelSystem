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

namespace DelonixRegiaHotelSystem.Controllers
{
    public class HouseKeepingReportsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/HouseKeepingReports
        public IQueryable<HouseKeepingReport> GetHouseKeepingReports()
        {
            return db.HouseKeepingReports;
        }

        // GET: api/HouseKeepingReports/5
        [ResponseType(typeof(HouseKeepingReport))]
        public async Task<IHttpActionResult> GetHouseKeepingReport(int id)
        {
            HouseKeepingReport houseKeepingReport = await db.HouseKeepingReports.FindAsync(id);
            if (houseKeepingReport == null)
            {
                return NotFound();
            }

            return Ok(houseKeepingReport);
        }

        // PUT: api/HouseKeepingReports/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutHouseKeepingReport(int id, HouseKeepingReport houseKeepingReport)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != houseKeepingReport.HouseKeepingReportId)
            {
                return BadRequest();
            }

            db.Entry(houseKeepingReport).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HouseKeepingReportExists(id))
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

        // POST: api/HouseKeepingReports
        [ResponseType(typeof(HouseKeepingReport))]
        public async Task<IHttpActionResult> PostHouseKeepingReport(HouseKeepingReport houseKeepingReport)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.HouseKeepingReports.Add(houseKeepingReport);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = houseKeepingReport.HouseKeepingReportId }, houseKeepingReport);
        }

        // DELETE: api/HouseKeepingReports/5
        [ResponseType(typeof(HouseKeepingReport))]
        public async Task<IHttpActionResult> DeleteHouseKeepingReport(int id)
        {
            HouseKeepingReport houseKeepingReport = await db.HouseKeepingReports.FindAsync(id);
            if (houseKeepingReport == null)
            {
                return NotFound();
            }

            db.HouseKeepingReports.Remove(houseKeepingReport);
            await db.SaveChangesAsync();

            return Ok(houseKeepingReport);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool HouseKeepingReportExists(int id)
        {
            return db.HouseKeepingReports.Count(e => e.HouseKeepingReportId == id) > 0;
        }
    }
}