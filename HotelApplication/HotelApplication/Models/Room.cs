using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HotelApplication.Models
{
    public class Room
    {
        public int roomID { get; set; }
        [Required]
        public string roomType { get; set; }
        public double roomPrice { get; set; }
        public int roomFloor { get; set; }
        public string roomRemarks { get; set; }
    }
}