using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HotelApplication.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ViewListOfCustomer()
        {
            return View();
        }

        public ActionResult ViewListOfPayment()
        {
            return View();
        }

        public ActionResult ViewListOfOrder()
        {
            return View();
        }

        public ActionResult typesOfReport()
        {
            return View();
        }

        public ActionResult loadingCreditCard()
        {
            return View();
        }

        public ActionResult creditCardPayment()
        {
            return View();
        }

        public ActionResult creatingCustomerParticular()
        {
            return View();
        }

        public ActionResult cashPaymentMethod()
        {
            return View();
        }

        public ActionResult creatingNewOrder()
        {
            return View();
        }

        public ActionResult choosePaymentMethod()
        {
            return View();
        }

        public ActionResult orderDetail()
        {
            return View();
        }

        public ActionResult selectRoom()
        {
            return View();
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}