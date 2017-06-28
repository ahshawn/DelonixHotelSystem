namespace DelonixRegiaHotelSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;

    public partial class SeedFirdausModel : DbMigration
    {
        public override void Up()
        {
            Sql(@"
INSERT INTO [dbo].[Staffs] ([StaffNric], [StaffFirstName], [StaffLastName], [StaffContactNumber], [StaffEmail], [StaffBirthDate], [BankAccount], [DutyType], [BankName], [RoleAssigned]) VALUES (N'S9821353V', N'Kumar', N'Kristoph', 98723456, N'kumar@ku.com', N'24/09/1998', N'234-44wv', N'Receptions', N'Kumar', N'Receptionist')
INSERT INTO [dbo].[Staffs] ([StaffNric], [StaffFirstName], [StaffLastName], [StaffContactNumber], [StaffEmail], [StaffBirthDate], [BankAccount], [DutyType], [BankName], [RoleAssigned]) VALUES (N'S9821352D', N'Shwee', N'koh', 92223456, N'Shwee@ku.com', N'21/02/1998', N'234-55wv', N'Staff', N'Shwee', N'Staff')
INSERT INTO [dbo].[Staffs] ([StaffNric], [StaffFirstName], [StaffLastName], [StaffContactNumber], [StaffEmail], [StaffBirthDate], [BankAccount], [DutyType], [BankName], [RoleAssigned]) VALUES (N'qwer', N'wqre', N'weqr', 331232, N'rwqer', N'rqw', N'wqre', N'wqr', N'rw', N'rwq')

INSERT INTO [dbo].[Duties] ([TypeOfDuty], [StaffFirstName], [DutyPeriod], [DutyDescription], [DutyLocation]) VALUES (N'Receptionist', N'Kumar', N'2017-06-25 03:05:54', N'Assist Walk in customers and booking', N'Front desk')
INSERT INTO [dbo].[Duties] ([TypeOfDuty], [StaffFirstName], [DutyPeriod], [DutyDescription], [DutyLocation]) VALUES (N'Clean', N'Sheww', N'2017-01-01 00:00:00', N'Clean hotel rooms', N'-1')
");
        }

        public override void Down()
        {
        }
    }
}
