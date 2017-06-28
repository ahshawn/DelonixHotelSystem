namespace DelonixRegiaHotelSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateModels : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.DutyRosters", "DateTime", c => c.DateTime(nullable: false));
            AddColumn("dbo.DutyRosters", "DutyDetail", c => c.String());
            AddColumn("dbo.DutyRosters", "Location", c => c.String());
            DropColumn("dbo.DutyRosters", "StartDateTime");
            DropColumn("dbo.DutyRosters", "EndDateTime");
        }
        
        public override void Down()
        {
            AddColumn("dbo.DutyRosters", "EndDateTime", c => c.DateTime(nullable: false));
            AddColumn("dbo.DutyRosters", "StartDateTime", c => c.DateTime(nullable: false));
            DropColumn("dbo.DutyRosters", "Location");
            DropColumn("dbo.DutyRosters", "DutyDetail");
            DropColumn("dbo.DutyRosters", "DateTime");
        }
    }
}
