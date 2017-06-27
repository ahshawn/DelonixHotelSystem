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
    [RoutePrefix("api/orderdetails")]
    public class OrderDetailsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/OrderDetails
        public IQueryable<OrderDetail> GetOrderDetails()
        {
            return db.OrderDetails;
        }

        [ResponseType(typeof(OrderDetail))]
        [Route("room/{roomId:int}")]
        public async Task<IHttpActionResult> GetRoomNumber(int roomId)
        {
            OrderDetail orderDetail = await db.OrderDetails.Where(r => r.roomID == roomId).FirstOrDefaultAsync();
            if (orderDetail == null)
            {
                return NotFound();
            }

            return Ok(orderDetail);
        }

        [ResponseType(typeof(OrderDetail))]
        [Route("occupiedroom/{id:int}")]
        public async Task<IHttpActionResult> GetOccupiedRoomNumber(int id)
        {
            Room findRoomStatus = db.Rooms.SingleOrDefault(r => r.roomID == id && r.Status == "Occupied");
            if (findRoomStatus == null)
            {
                return NotFound();

            }
            OrderDetail orderDetail = await db.OrderDetails.Where(r => r.roomID == id).FirstOrDefaultAsync();
            if (orderDetail == null)
            {
                return NotFound();
            }

            return Ok(orderDetail);
        }

        // GET: api/OrderDetails/5
        [ResponseType(typeof(OrderDetail))]
        public async Task<IHttpActionResult> GetOrderDetail(int id)
        {
            OrderDetail orderDetail = await db.OrderDetails.FindAsync(id);
            if (orderDetail == null)
            {
                return NotFound();
            }

            return Ok(orderDetail);
        }
        [Route("checkoutnotdone")]
        public IQueryable<OrderDetail> GetCheckoutNotDone()
        {
            return db.OrderDetails.Where(c => c.CheckoutStatus == "Not Done");
        }

        // PUT: api/OrderDetails/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutOrderDetail(int id, OrderDetail orderDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != orderDetail.orderDetailID)
            {
                return BadRequest();
            }

            db.Entry(orderDetail).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderDetailExists(id))
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

        // POST: api/OrderDetails
        [ResponseType(typeof(OrderDetail))]
        public async Task<IHttpActionResult> PostOrderDetail(OrderDetail orderDetail)
        {
            orderDetail.totalNumberOfDays = (int)(orderDetail.CheckOutTime - orderDetail.CheckInTime).TotalDays;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.OrderDetails.Add(orderDetail);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = orderDetail.orderDetailID }, orderDetail);
        }

        // DELETE: api/OrderDetails/5
        [ResponseType(typeof(OrderDetail))]
        public async Task<IHttpActionResult> DeleteOrderDetail(int id)
        {
            OrderDetail orderDetail = await db.OrderDetails.FindAsync(id);
            if (orderDetail == null)
            {
                return NotFound();
            }

            db.OrderDetails.Remove(orderDetail);
            await db.SaveChangesAsync();

            return Ok(orderDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool OrderDetailExists(int id)
        {
            return db.OrderDetails.Count(e => e.orderDetailID == id) > 0;
        }
    }
}