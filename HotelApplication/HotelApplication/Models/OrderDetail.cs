using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HotelApplication.Models
{
    public class OrderDetail
    {
        public int OrderDetailId { get; set; }
        [Required]
        public string RoomType { get; set; }
        public double RoomPrice { get; set; }
        public int RoomFloor { get; set; }
        public string RoomRemarks { get; set; }
        public int TotalNumberOfDays { get; set; }
        public int TotalNumberOfGuest { get; set; }
        public double TotalCost { get; set; }
        public string OrderRemarks { get; set; }
        public int CustomerId { get; set; }
        public int PaymentId { get; set; }
    }
}