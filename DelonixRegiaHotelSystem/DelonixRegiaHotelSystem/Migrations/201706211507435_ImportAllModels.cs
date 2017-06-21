namespace DelonixRegiaHotelSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ImportAllModels : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.BookingDetails",
                c => new
                    {
                        BookingDetailsId = c.Int(nullable: false, identity: true),
                        TotalNumberOfGuest = c.Int(nullable: false),
                        NumberOfAdultGuest = c.Int(nullable: false),
                        NumberOfChildrenGuest = c.Int(nullable: false),
                        RoomCheckInTime = c.DateTime(nullable: false),
                        RoomCheckOutTime = c.DateTime(nullable: false),
                        CustomerId = c.Int(nullable: false),
                        RoomId = c.Int(nullable: false),
                        AdditionalRequirements = c.String(),
                    })
                .PrimaryKey(t => t.BookingDetailsId);
            
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
                "dbo.DutyRosters",
                c => new
                    {
                        DutyRosterId = c.Int(nullable: false, identity: true),
                        StaffId = c.Int(nullable: false),
                        StartDateTime = c.DateTime(nullable: false),
                        EndDateTime = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.DutyRosterId);
            
            CreateTable(
                "dbo.HouseKeepingReports",
                c => new
                    {
                        HouseKeepingReportId = c.Int(nullable: false, identity: true),
                        StaffNric = c.String(),
                        HouseKeepingStatus = c.String(),
                        RoomId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.HouseKeepingReportId);
            
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
            
            CreateTable(
                "dbo.Payments",
                c => new
                    {
                        paymentID = c.Int(nullable: false, identity: true),
                        paymentType = c.String(nullable: false),
                        paymentCreditCardNumber = c.Long(nullable: false),
                        paymentCardType = c.String(),
                        paymentExpiryMonth = c.Int(nullable: false),
                        paymentExpiryYear = c.Int(nullable: false),
                        paymentCVC = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.paymentID);
            
            CreateTable(
                "dbo.Rooms",
                c => new
                    {
                        roomID = c.Int(nullable: false, identity: true),
                        roomType = c.String(nullable: false),
                        roomPrice = c.Double(nullable: false),
                        roomFloor = c.Int(nullable: false),
                        roomRemarks = c.String(),
                        Status = c.String(),
                    })
                .PrimaryKey(t => t.roomID);
            
            CreateTable(
                "dbo.Staffs",
                c => new
                    {
                        StaffId = c.Int(nullable: false, identity: true),
                        StaffNric = c.String(),
                        StaffFirstName = c.String(),
                        StaffLastName = c.String(),
                        StaffContactNumber = c.Int(nullable: false),
                        StaffEmail = c.String(),
                        StaffBirthDate = c.String(),
                        BankAccount = c.String(),
                        DutyType = c.String(),
                    })
                .PrimaryKey(t => t.StaffId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Staffs");
            DropTable("dbo.Rooms");
            DropTable("dbo.Payments");
            DropTable("dbo.OrderDetails");
            DropTable("dbo.HouseKeepingReports");
            DropTable("dbo.DutyRosters");
            DropTable("dbo.Customers");
            DropTable("dbo.BookingDetails");
        }
    }
}
