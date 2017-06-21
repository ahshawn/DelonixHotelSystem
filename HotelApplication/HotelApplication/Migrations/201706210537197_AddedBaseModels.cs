namespace HotelApplication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedBaseModels : DbMigration
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
                "dbo.DutyRosters",
                c => new
                    {
                        DutyRosterId = c.Int(nullable: false, identity: true),
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
                "dbo.RoomReports",
                c => new
                    {
                        RoomReportId = c.Int(nullable: false, identity: true),
                        RoomId = c.Int(nullable: false),
                        RoomStatus = c.String(),
                        RoomRemarks = c.String(),
                    })
                .PrimaryKey(t => t.RoomReportId);
            
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
                    })
                .PrimaryKey(t => t.StaffId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Staffs");
            DropTable("dbo.RoomReports");
            DropTable("dbo.HouseKeepingReports");
            DropTable("dbo.DutyRosters");
            DropTable("dbo.BookingDetails");
        }
    }
}
