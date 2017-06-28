namespace DelonixRegiaHotelSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateModel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Duties",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        TypeOfDuty = c.String(),
                        StaffFirstName = c.String(),
                        DutyPeriod = c.DateTime(nullable: false),
                        DutyDescription = c.String(),
                        DutyLocation = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Staffs", "BankName", c => c.String());
            AddColumn("dbo.Staffs", "RoleAssigned", c => c.String());
            DropTable("dbo.DutyRosters");
            DropTable("dbo.HouseKeepingReports");
        }
        
        public override void Down()
        {
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
                "dbo.DutyRosters",
                c => new
                    {
                        DutyRosterId = c.Int(nullable: false, identity: true),
                        StaffId = c.Int(nullable: false),
                        DateTime = c.DateTime(nullable: false),
                        DutyDetail = c.String(),
                        Location = c.String(),
                    })
                .PrimaryKey(t => t.DutyRosterId);
            
            DropColumn("dbo.Staffs", "RoleAssigned");
            DropColumn("dbo.Staffs", "BankName");
            DropTable("dbo.Duties");
        }
    }
}
