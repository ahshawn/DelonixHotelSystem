using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DelonixRegiaHotelSystem.Models
{
    public class Staff
    {
        public int StaffId { get; set; }
        public string StaffNric { get; set; }
        public string StaffFirstName { get; set; }
        public string StaffLastName { get; set; }
        public int StaffContactNumber { get; set; }
        public string StaffEmail { get; set; }
        public string StaffBirthDate { get; set; }
        public string BankAccount { get; set; }
        public string DutyType { get; set; }
    }
}