using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HotelApplication.Models
{
    public class BookingDetails
    {
        public int BookingDetailsId { get; set; }
        public int TotalNumberOfGuest { get; set; }
        public int NumberOfAdultGuest { get; set; }
        public int NumberOfChildrenGuest { get; set; }
        public DateTime RoomCheckInTime { get; set; }
        public DateTime RoomCheckOutTime { get; set; }
        public int CustomerId { get; set; }
        public int RoomId { get; set; }
        public string AdditionalRequirements { get; set; }
    }
}