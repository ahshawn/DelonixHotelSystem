var ViewModel = function () {
    var self = this;
    self.staffs = ko.observableArray();
    self.error = ko.observable();
    self.details = ko.observable();
    //self.updateImage = ko.observable();

    

    self.newStaff = {
        StaffId: ko.observable(),
        StaffNric: ko.observable(),
        StaffFirstName: ko.observable(),
        StaffLastName: ko.observable(),
        StaffContactNumber: ko.observable(),
        StaffEmail: ko.observable(),
        StaffBirthDate: ko.observable(),
        BankName: ko.observable(),
        BankAccount: ko.observable(),
        DutyType: ko.observable(),
        RoleAssigned: ko.observable(),
    };


    //search at staff
    self.searchStringOne = ko.observable();
    self.searchStaffs = ko.computed(function () {
        if (!self.searchStringOne()) {
            return self.staffs();
        } else {
            return ko.utils.arrayFilter(self.staffs(), function (Staff) {
                return stringStartsWith(Staff.StaffFirstName.toUpperCase(), self.searchStringOne().toUpperCase());
            });
        }
    });


    // end of search at staff side
    var stringStartsWith = function (string, startsWith) {
        string = string || "";
        if (startsWith.length > string.length)
            return false;
        return string.substring(0, startsWith.length) === startsWith;
    };

    //************  Remember to change the URI accordingly  **********************//
    var staffURI = '../api/staffs/';

    //** this section contains all the AJAX call to the Web APIs **//

     // function to retrieve all products using AJAX call to web API
    function getAllStaff() {
        $.ajax({
            type: 'GET',
            url: staffURI,
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                self.staffs(data);
            },
            error: function (err) {
                alert("Error: " + err.status + " " + err.statusText);
            }
        });
    };
    // end of function to retrieve all staffs

    // get details of record with reference to the product id
    self.getStaffDetails = function (item) {
        $.ajax({
            type: 'GET',
            url: staffURI + item.StaffId,
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                self.details(data);
            },
            error: function (err) {
                alert("Error: " + err.status + " " + err.statusText);
            }
        });
    }
    // end of function to get details of a product

    // start of the function to save the new product record to database via Web API
    self.addStaff = function () {
        var aStaff = {
            StaffId: self.newStaff.StaffId(), // auto number field
            StaffNric: self.newStaff.StaffNric(),
            StaffFirstName: self.newStaff.StaffFirstName(),
            StaffLastName: self.newStaff.StaffLastName(),
            StaffContactNumber: self.newStaff.StaffContactNumber(),
            StaffEmail: self.newStaff.StaffEmail(),
            //CoverImage: self.newProduct.CoverImage().replace('data:image/jpeg;base64,', ''),
            StaffBirthDate: self.newStaff.StaffBirthDate(),
            BankName: self.newStaff.BankName(),
            BankAccount: self.newStaff.BankAccount(),
            DutyType: self.newStaff.DutyType(),
            RoleAssigned: self.newStaff.RoleAssigned(),
           
        };

        $.ajax({
            type: 'POST',
            url: staffURI,
            data: JSON.stringify(aStaff),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                self.staffs.push(data);
                alert("Record created successfully!");
            },
            error: function (err) {
                alert("Error: " + err.status + " " + err.statusText);
            }
        });
    };
    // end of the function to save the new product record to database


    // method to save the updated product details
    self.saveStaff = function () {
       // if (self.updatefiles().length == 0)  // CoverImage is not changed
       // {
       //     self.updateImage(self.details().CoverImage);
       // }

        var updateStaff = {
            StaffId: self.details().StaffId,
            StaffNric: self.details().StaffNric,
            StaffFirstName: self.details().StaffFirstName,
            StaffLastName: self.details().StaffLastName,
            StaffContactNumber: self.details().StaffContactNumber,
            StaffEmail: self.details().StaffEmail,
            //CoverImage: self.updateImage().replace('data:image/jpeg;base64,', ''),
            StaffBirthDate: self.details().StaffBirthDate,
            BankName: self.details().BankName,
            BankAccount: self.details().BankAccount,
            DutyType: self.details().DutyType,
            RoleAssigned: self.details().RoleAssigned,
            
        };

        $.ajax({
            type: 'PUT',
            url: staffURI + updateStaff.StaffId,
            data: JSON.stringify(updateStaff),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                self.staffs.replace(data);
                alert("Record updated successfully!");
            },
            error: function (err) {
                alert("Error: " + err.status + " " + err.statusText);
            }
        });
    };
    // end of method to save the updated product details

    // remove record from database using web api
    self.removeStaff = function () {
        var theStaff = {
            StaffId: self.details().StaffId,
            StaffNric: self.details().StaffNric,
            StaffFirstName: self.details().StaffFirstName,
            StaffLastName: self.details().StaffLastName,
            StaffContactNumber:self.details().StaffContactNumber,
            StaffEmail: self.details().StaffEmail,
            StaffBirthDate: self.details().StaffBirthDate,
            //CoverImage: self.details().CoverImage,
            BankName: self.details().BankName,
            BankAccount: self.details().BankAccount,
            DutyType: self.details().DutyType,
            RoleAssigned: self.details().RoleAssigned,
            
        };

        if (confirm('Are you sure to delete "' + theStaff.StaffFirstName + '"?')) {
            $.ajax({
                type: 'DELETE',
                url: staffURI + theStaff.StaffId,
                dataType: 'json',
                contentType: 'application/json',
                success: function (data) {
                    self.staffs.remove(theStaff);
                    alert("Record has been deleted!");
                },
                error: function (err) {
                    alert("Error: " + err.status + " " + err.statusText);
                }
            });
        };
    }
    // end of method to remove the selected product


    /** this section is for file upload **/
    var FileModel = function (name, src, binary) {
        var self = this;
        this.name = name;
        this.src = src;
    };
    self.files = ko.observableArray(); // array to store files shown
    self.fileSelect = function (elemet, event) {
        var files = event.target.files; // FileList object from file upload
        var f = files[0]; // we are only interested in the first and only one file
        var reader = new FileReader();

        self.files.removeAll(); // clear the array, so that we can add the new file selected and display in the view
        reader.onload = (function (theFile) {
            return function (e) {
                self.files.push(new FileModel(escape(theFile.name), e.target.result)); // add to the array, file name and the binary data of the image file
                self.newStaff.StaffImage(e.target.result);
            };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    };

    self.updatefiles = ko.observableArray(); // array to store files shown
    self.updatefileSelect = function (elemet, event) {
        var updatefiles = event.target.files; // FileList object from file upload
        var f = updatefiles[0]; // we are only interested in the first and only one file
        var reader = new FileReader();

        self.updatefiles.removeAll(); // clear the array, so that we can add the new file selected and display in the view
        reader.onload = (function (theFile) {
            return function (e) {
                self.updatefiles.push(new FileModel(escape(theFile.name), e.target.result)); // add to the array, file name and the binary data of the image file
                self.updateImage(e.target.result);
            };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    };


    /** end of section for file upload **/




    //** this is the end of the section contains all the AJAX call to the Web APIs **//

    // Fetch the initial data
    getAllStaff();
};

ko.applyBindings(new ViewModel());
