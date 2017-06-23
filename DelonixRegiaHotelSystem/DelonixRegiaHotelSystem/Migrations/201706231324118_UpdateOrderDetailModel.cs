namespace DelonixRegiaHotelSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateOrderDetailModel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.OrderDetails", "roomID", c => c.Int(nullable: false));
            AddColumn("dbo.OrderDetails", "CheckInTime", c => c.DateTime(nullable: false));
            AddColumn("dbo.OrderDetails", "CheckOutTime", c => c.DateTime(nullable: false));
            AddColumn("dbo.OrderDetails", "totalAdult", c => c.Int(nullable: false));
            AddColumn("dbo.OrderDetails", "totalChild", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.OrderDetails", "totalChild");
            DropColumn("dbo.OrderDetails", "totalAdult");
            DropColumn("dbo.OrderDetails", "CheckOutTime");
            DropColumn("dbo.OrderDetails", "CheckInTime");
            DropColumn("dbo.OrderDetails", "roomID");
        }
    }
}
