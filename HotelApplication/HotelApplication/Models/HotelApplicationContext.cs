using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace HotelApplication.Models
{
    public class HotelApplicationContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public HotelApplicationContext() : base("name=HotelApplicationContext")
        {
        }

        public System.Data.Entity.DbSet<HotelApplication.Models.Customer> Customers { get; set; }

        public System.Data.Entity.DbSet<HotelApplication.Models.OrderDetail> OrderDetails { get; set; }

        public System.Data.Entity.DbSet<HotelApplication.Models.Payment> Payments { get; set; }

        public System.Data.Entity.DbSet<HotelApplication.Models.Room> Rooms { get; set; }

        public System.Data.Entity.DbSet<HotelApplication.Models.BookingDetails> BookingDetails { get; set; }

        public System.Data.Entity.DbSet<HotelApplication.Models.DutyRoster> DutyRosters { get; set; }

        public System.Data.Entity.DbSet<HotelApplication.Models.HouseKeepingReport> HouseKeepingReports { get; set; }

        public System.Data.Entity.DbSet<HotelApplication.Models.RoomReport> RoomReports { get; set; }

        public System.Data.Entity.DbSet<HotelApplication.Models.Staff> Staffs { get; set; }
    }
}
