namespace DelonixRegiaHotelSystem.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using DelonixRegiaHotelSystem.Models;
    using System.IO;


    internal sealed class Configuration : DbMigrationsConfiguration<DelonixRegiaHotelSystem.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }
        //Open file into a filestream and read data in a byte array.
        byte[] ReadFile(string sPath)
        {
            //Initialize byte array with a null value initially.
            byte[] data = null;

            //Use FileInfo object to get file size.
            FileInfo fInfo = new FileInfo(sPath);
            long numBytes = fInfo.Length;

            //Open FileStream to read file
            FileStream fStream = new FileStream(sPath, FileMode.Open,
            FileAccess.Read);

            //Use BinaryReader to read file stream into byte array.
            BinaryReader br = new BinaryReader(fStream);

            //When you use BinaryReader, you need to 

            //supply number of bytes to read from file.
            data = br.ReadBytes((int)numBytes);
            return data;
        }


        protected override void Seed(DelonixRegiaHotelSystem.Models.ApplicationDbContext context)
        {
            context.Staffs.AddOrUpdate(x => x.StaffId,
                new Staff()
                {
                    StaffId = 1,
                    StaffNric = "S9214543f",
                    StaffFirstName = "Kumar",
                    StaffLastName = "Kristoph",
                    StaffBirthDate = "29 August 1992",
                    StaffContactNumber = 91030431,
                    StaffEmail = "kumarku@gmail.com",
                    StaffImage = ReadFile("D:\\Documents\\Hotel System\\trunk\\DelonixRegiaHotelSystem\\DelonixRegiaHotelSystem\\Staff image\\kumar.jpg"),
                    BankAccount = "92mf-423d-2d",
                    BankAccountName = "Kumar",
                    DutyType = "Reception"

                });
        }
    }
}
