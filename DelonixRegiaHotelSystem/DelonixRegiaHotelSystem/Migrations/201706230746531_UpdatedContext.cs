namespace DelonixRegiaHotelSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdatedContext : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.OrderDetails", "CheckoutStatus", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.OrderDetails", "CheckoutStatus");
        }
    }
}
