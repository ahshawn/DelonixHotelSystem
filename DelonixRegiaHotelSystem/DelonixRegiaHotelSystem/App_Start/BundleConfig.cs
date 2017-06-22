using System.Web;
using System.Web.Optimization;

namespace DelonixRegiaHotelSystem
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap-solar.css",
                      "~/Content/site.css",
                      "~/Content/font-awesome.css"));

            /* ----- JIAZHE BUNDLE ----- */
            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/Scripts/knockout-{version}.js",
                "~/Scripts/app.js"));

            bundles.Add(new ScriptBundle("~/bundles/room").Include(
                "~/Scripts/knockout-{version}.js",
                "~/Scripts/room.js"));

            bundles.Add(new ScriptBundle("~/bundles/payment").Include(
                "~/Scripts/knockout-{version}.js",
                "~/Scripts/payment.js"));

            bundles.Add(new ScriptBundle("~/bundles/order").Include(
                "~/Scripts/knockout-{version}.js",
                "~/Scripts/order.js"));

            /* ----- END JIAZHE BUNDLE ----- */


            /* ----- SHAWN BUNDLE ----- */

            bundles.Add(new ScriptBundle("~/bundles/AngularReport")
                .IncludeDirectory("~/ReportsApp", "*.js", true));

            bundles.Add(new StyleBundle("~/Content/reportcss").Include(
                "~/Content/report.css"));

            /* ----- END SHAWN BUNDLE ----- */
        }
    }
}
