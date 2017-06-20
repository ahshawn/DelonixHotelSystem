namespace HotelApplication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedPaymentModelAndController : DbMigration
    {
        public override void Up()
        {
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
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Payments");
        }
    }
}
