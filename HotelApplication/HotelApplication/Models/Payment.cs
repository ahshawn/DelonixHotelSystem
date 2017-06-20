using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HotelApplication.Models
{
    public class Payment
    {
        public int paymentID { get; set; }
        [Required]
        public String paymentType { get; set; }
        public long paymentCreditCardNumber { get; set; }
        public String paymentCardType { get; set; }
        public int paymentExpiryMonth { get; set; }
        public int paymentExpiryYear { get; set; }
        public int paymentCVC { get; set; }

    }
}