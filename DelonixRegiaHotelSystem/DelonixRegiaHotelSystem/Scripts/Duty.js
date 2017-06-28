var ViewModel = function () {
    var self = this;
    self.duty = ko.observableArray();
    self.error = ko.observable();
    self.details = ko.observable();



    self.newDuty = {
        Id: ko.observable(),
        TypeOfDuty: ko.observable(),
        StaffFirstName: ko.observable(),
        DutyPeriod: ko.observable(),
        DutyDescription: ko.observable(),
        DutyLocation: ko.observable()
        };


    //search at housekeeping report
    self.searchString2 = ko.observable();
    self.searchDutyType = ko.computed(function () {
        if (!self.searchString2()) {
            return self.duty();
        } else {
            return ko.utils.arrayFilter(self.duty(), function (Duties) {
                return stringStartsWith(Duties.TypeOfDuty.toUpperCase(), self.searchString2().toUpperCase()) || stringStartsWith(Duties.StaffFirstName.toUpperCase(), self.searchString2().toUpperCase())
                    || stringStartsWith(Duties.DutyPeriod.toUpperCase(), self.searchString2().toUpperCase()) || stringStartsWith(Duties.DutyLocation.toUpperCase(), self.searchString2().toUpperCase());
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
    var dutiesURI = '../api/duties/';

   


    //** this section contains all the AJAX call to the Web APIs **//
    // function to retrieve all products using AJAX call to web API
    function getAllDuty() {
        $.ajax({
            type: 'GET',
            url: dutiesURI,
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                self.duty(data);
            },
            error: function (err) {
                alert("Error: " + err.status + " " + err.statusText);
            }
        });
    };
    // end of function to retrieve all products



    // get details of record with reference to the Duty id
    self.getDutyDetails = function (item) {
        $.ajax({
            type: 'GET',
            url: dutiesURI + item.Id,
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
    // end of function to get details of a duty


    // start of the function to save the new product record to database via Web API
    self.addDuty = function () {
        var aDuty = {
            Id: self.newDuty.Id(), // auto number field
            TypeOfDuty: self.newDuty.TypeOfDuty(),
            StaffFirstName: self.newDuty.StaffFirstName(),
            DutyPeriod: self.newDuty.DutyPeriod(),
            DutyDescription: self.newDuty.DutyDescription(),
            DutyLocation: self.newDuty.DutyLocation()
            
        };

        $.ajax({
            type: 'POST',
            url: dutiesURI,
            data: JSON.stringify(aDuty),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                self.duty.push(data);
                alert("Record created successfully!");
            },
            error: function (err) {
                alert("Error: " + err.status + " " + err.statusText);
            }
        });
    };
    // end of the function to save the new product record to database



    // method to save the updated product details
    self.saveDuty = function () {
      

        var updateDuty = {
            Id: self.details().Id,
            TypeOfDuty: self.details().TypeOfDuty,
            StaffFirstName: self.details().StaffFirstName,
            DutyPeriod: self.details().DutyPeriod,
            DutyDescription: self.details().DutyDescription,
            DutyLocation: self.details().DutyLocation
          
         
        };

        $.ajax({
            type: 'PUT',
            url: dutiesURI + updateDuty.Id,
            data: JSON.stringify(updateDuty),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                self.duty.replace(data);
                alert("Record updated successfully!");
            },
            error: function (err) {
                alert("Error: " + err.status + " " + err.statusText);
            }
        });
    };
    // end of method to save the updated product details


    // remove record from database using web api
    self.removeDuty = function () {
        var theDuty = {
            Id: self.details().Id,
            TypeOfDuty: self.details().TypeOfDuty,
            StaffFirstName: self.details().StaffFirstName,
            DutyPeriod: self.details().DutyPeriod,
            DutyDescription: self.details().DutyDescription,
            DutyLocation: self.details().DutyLocation
        };

        if (confirm('Are you sure to delete "' + theDuty.TypeOfDuty + '"?')) {
            $.ajax({
                type: 'DELETE',
                url: dutiesURI + theDuty.Id,
                dataType: 'json',
                contentType: 'application/json',
                success: function (data) {
                    self.duty.remove(theDuty);
                    alert("Record has been deleted!");
                },
                error: function (err) {
                    alert("Error: " + err.status + " " + err.statusText);
                }
            });
        };
    }
    // end of method to remove the selected product



    //** this is the end of the section contains all the AJAX call to the Web APIs **//

    // Fetch the initial data
    getAllDuty();
};

ko.applyBindings(new ViewModel());
