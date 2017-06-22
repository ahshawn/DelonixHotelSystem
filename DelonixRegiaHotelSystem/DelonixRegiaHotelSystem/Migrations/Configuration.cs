namespace DelonixRegiaHotelSystem.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using DelonixRegiaHotelSystem.Models;
    using System.IO;

    internal sealed class Configuration : DbMigrationsConfiguration<DelonixRegiaHotelSystem.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(DelonixRegiaHotelSystem.Models.ApplicationDbContext context)
        {
            context.Staffs.AddOrUpdate(x => x.StaffId, new Staff()
            {
                StaffId = 1,
                StaffFirstName = "Kumar",
                StaffLastName = "Kristoph",
                StaffNric = "S9821353V",
                StaffEmail = "kumar@ku.com",
                StaffContactNumber = 98723456,
                BankName = "Kumar",
                BankAccount = "234-44wv",
                DutyType = "Receptions",
                RoleAssigned = "Receptionist",
                StaffBirthDate = "24/09/1998"
            });
        }
    }
}
