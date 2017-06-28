using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DelonixRegiaHotelSystem.Models
{
    public class Duty
    {
        public int Id { get; set; }
        public string TypeOfDuty { get; set; }
        public string StaffFirstName { get; set; }
        public DateTime DutyPeriod { get; set; }
        public string DutyDescription { get; set; }
        public string DutyLocation { get; set; }
    }
}