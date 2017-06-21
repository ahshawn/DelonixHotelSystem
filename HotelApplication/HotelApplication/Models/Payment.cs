using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HotelApplication.Models
{
    public class Payment
    {
        public int PaymentId { get; set; }
        [Required]
        public String PaymentType { get; set; }
        public long PaymentCreditCardNumber { get; set; }
        public String PaymentCardType { get; set; }
        public int PaymentExpiryMonth { get; set; }
        public int PaymentExpiryYear { get; set; }
        public int PaymentCVC { get; set; }

    }
}