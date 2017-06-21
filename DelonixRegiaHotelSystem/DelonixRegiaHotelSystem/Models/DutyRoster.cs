using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DelonixRegiaHotelSystem.Models
{
    public class DutyRoster
    {
        public int DutyRosterId { get; set; }
        public int StaffId { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
    }
}