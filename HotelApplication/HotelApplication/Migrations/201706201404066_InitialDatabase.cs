namespace HotelApplication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialDatabase : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Customers",
                c => new
                    {
                        customerID = c.Int(nullable: false, identity: true),
                        customerNRIC = c.String(nullable: false),
                        customerFirstName = c.String(),
                        customerLastName = c.String(),
                        customerAddress = c.String(),
                        customerContactNumber = c.Long(nullable: false),
                        customerEmail = c.String(),
                        customerDOBDay = c.Int(nullable: false),
                        customerDOBMonth = c.Int(nullable: false),
                        customerDOBYear = c.Int(nullable: false),
                        customerNationality = c.String(),
                        customerPassportNumber = c.Long(nullable: false),
                    })
                .PrimaryKey(t => t.customerID);
            
            CreateTable(
                "dbo.OrderDetails",
                c => new
                    {
                        orderDetailID = c.Int(nullable: false, identity: true),
                        roomType = c.String(nullable: false),
                        roomPrice = c.Double(nullable: false),
                        roomFloor = c.Int(nullable: false),
                        roomRemarks = c.String(),
                        totalNumberOfDays = c.Int(nullable: false),
                        totalNumberOfGuest = c.Int(nullable: false),
                        totalCost = c.Double(nullable: false),
                        orderRemarks = c.String(),
                        customerID = c.Int(nullable: false),
                        paymentID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.orderDetailID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.OrderDetails");
            DropTable("dbo.Customers");
        }
    }
}
