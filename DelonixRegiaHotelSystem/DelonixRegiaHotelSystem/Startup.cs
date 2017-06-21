using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DelonixRegiaHotelSystem.Startup))]
namespace DelonixRegiaHotelSystem
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
