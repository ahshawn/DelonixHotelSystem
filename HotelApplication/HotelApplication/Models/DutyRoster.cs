using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HotelApplication.Models
{
    public class DutyRoster
    {
        public int DutyRosterId { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
    }
}