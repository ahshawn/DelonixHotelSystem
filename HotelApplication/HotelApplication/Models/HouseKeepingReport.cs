using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HotelApplication.Models
{
    public class HouseKeepingReport
    {
        public int HouseKeepingReportId { get; set; }
        public string StaffNric { get; set; }
        public string HouseKeepingStatus { get; set; }
        public int RoomId { get; set; }
    }
}