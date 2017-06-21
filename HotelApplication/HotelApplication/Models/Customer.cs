using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HotelApplication.Models
{
    public class Customer
    {
        public int CustomerId { get; set; }
        [Required]
        public string CustomerNric { get; set; }
        public string CustomerFirstName { get; set; }
        public string CustomerLastName { get; set; }
        public string CustomerAddress { get; set; }
        public long CustomerContactNumber { get; set; }
        public string CustomerEmail { get; set; }
        public int CustomerDOBDay { get; set; }
        public int CustomerDOBMonth { get; set; }
        public int CustomerDOBYear { get; set; }
        public string CustomerNationality { get; set; }
        public long CustomerPassportNumber { get; set; }
    }
}