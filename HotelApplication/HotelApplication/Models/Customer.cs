using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HotelApplication.Models
{
    public class Customer
    {
        public int customerID { get; set; }
        [Required]
        public string customerNRIC { get; set; }
        public string customerFirstName { get; set; }
        public string customerLastName { get; set; }
        public string customerAddress { get; set; }
        public long customerContactNumber { get; set; }
        public string customerEmail { get; set; }
        public int customerDOBDay { get; set; }
        public int customerDOBMonth { get; set; }
        public int customerDOBYear { get; set; }
        public string customerNationality { get; set; }
        public long customerPassportNumber { get; set; }
    }
}