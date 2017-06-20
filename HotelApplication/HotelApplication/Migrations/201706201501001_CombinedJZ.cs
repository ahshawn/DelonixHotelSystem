namespace HotelApplication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CombinedJZ : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Rooms",
                c => new
                    {
                        roomID = c.Int(nullable: false, identity: true),
                        roomType = c.String(nullable: false),
                        roomPrice = c.Double(nullable: false),
                        roomFloor = c.Int(nullable: false),
                        roomRemarks = c.String(),
                    })
                .PrimaryKey(t => t.roomID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Rooms");
        }
    }
}
