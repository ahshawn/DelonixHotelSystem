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
        public DateTime DateTime { get; set; }
        public string DutyDetail { get; set; }
        public string Location { get; set; }
    }
}