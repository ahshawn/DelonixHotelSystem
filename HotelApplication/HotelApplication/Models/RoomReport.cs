using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HotelApplication.Models
{
    public class RoomReport
    {
        public int RoomReportId { get; set; }
        public int RoomId { get; set; }
        public string RoomStatus { get; set; }
        public string RoomRemarks { get; set; }
    }
}