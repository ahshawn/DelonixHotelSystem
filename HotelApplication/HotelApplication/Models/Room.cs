using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HotelApplication.Models
{
    public class Room
    {
        public int RoomID { get; set; }
        [Required]
        public string RoomType { get; set; }
        public double RoomPrice { get; set; }
        public int RoomFloor { get; set; }
        public string RoomRemarks { get; set; }
    }
}