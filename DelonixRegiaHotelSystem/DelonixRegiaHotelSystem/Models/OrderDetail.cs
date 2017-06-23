using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DelonixRegiaHotelSystem.Models
{
    public class OrderDetail
    {
        public int orderDetailID { get; set; }
        [Required]
        public string roomType { get; set; }
        public int roomID { get; set; }
        public double roomPrice { get; set; }
        public int roomFloor { get; set; }
        public string roomRemarks { get; set; }
        public DateTime CheckInTime { get; set; }
        public DateTime CheckOutTime { get; set; }
        public int totalNumberOfDays { get; set; }
        public int totalNumberOfGuest { get; set; }
        public int totalAdult { get; set; }
        public int totalChild { get; set; }
        public double totalCost { get; set; }
        public string orderRemarks { get; set; }
        public int customerID { get; set; }
        public int paymentID { get; set; }
        public string CheckoutStatus { get; set; }
    }
}