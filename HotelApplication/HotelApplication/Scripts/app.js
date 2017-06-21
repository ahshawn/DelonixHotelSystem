var ViewModel = function () {
    var self = this;
    self.customers = ko.observableArray();
    self.error = ko.observable();
    self.customerDetails = ko.observable();





    //************  Remember to change the URI accordingly  **********************//
    var customerAPIURI = '../api/customers/';
    


    self.newCustomer = {
        customerID: ko.observable(),
        customerNRIC: ko.observable(),
        customerFirstName: ko.observable(),
        customerLastName: ko.observable(),
        customerContactNumber: ko.observable(),
        customerEmail: ko.observable(),
        customerDOBDay: ko.observable(),
        customerDOBMonth: ko.observable(),
        customerDOBYear: ko.observable(),
        customerNationality: ko.observable(),
        customerPassportNumber: ko.observable(),
        customerAddress: ko.observable(),

    };


    var tempName = "";

    //************  Add Customer  **********************//
    self.addCustomer = function () {
        var aCustomer = {
            customerID: self.newCustomer.CustomerID(), // auto number field
            customerNRIC: self.newCustomer.CustomerNRIC(),
            customerAddress: self.newCustomer.CustomerAddress(),
            customerFirstName: self.newCustomer.CustomerFirstName(),
            customerLastName: self.newCustomer.CustomerLastName(),
            customerContactNumber: self.newCustomer.CustomerContactNumber(),
            customerEmail: self.newCustomer.CustomerEmail(),
            customerDOBDay: self.newCustomer.CustomerDOBDay(),
            customerDOBMonth: self.newCustomer.CustomerDOBMonth(),
            customerDOBYear: self.newCustomer.CustomerDOBYear(),
            customerNationality: self.newCustomer.CustomerNationality(),
            customerPassportNumber: self.newCustomer.CustomerPassportNumber()

        };

        if (confirm('Are you sure to add "' + aCustomer.customerFirstName + " " + aCustomer.customerLastName + '"?')) {
            $.ajax({
                type: 'POST',
                url: customerAPIURI,
                data: JSON.stringify(aCustomer),
                dataType: 'json',
                contentType: 'application/json',
                success: function (data) {
                    self.customers.push(data);
                    var url = 'creatingNewOrder';
                    window.location.href = url;
                    

                },
                error: function (err) {
                    alert("Error: " + err.status + " " + err.statusText);
                }

            });

        };

    }


    //************  Update Customer  **********************//
    self.updateDetail = function () { 

        var updateCustomer = {
            customerID: self.customerDetails().CustomerId, // auto number field
            customerNRIC: self.customerDetails().CustomerNric,
            customerAddress: self.customerDetails().CustomerAddress,
            customerFirstName: self.customerDetails().CustomerFirstName,
            customerLastName: self.customerDetails().CustomerLastName,
            customerContactNumber: self.customerDetails().CustomerContactNumber,
            customerEmail: self.customerDetails().CustomerEmail,
            customerDOBDay: self.customerDetails().CustomerDOBDay,
            customerDOBMonth: self.customerDetails().CustomerDOBMonth,
            customerDOBYear: self.customerDetails().CustomerDOBYear,
            customerNationality: self.customerDetails().CustomerNationality,
            customerPassportNumber: self.customerDetails().CustomerPassportNumber

        };

        $.ajax({
            type: 'PUT',
            url: customerAPIURI  + updateCustomer.customerID,
            data: JSON.stringify(updateCustomer),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                self.customers.replace(data);
                getListOfCustomers();
                alert("Record updated successfully!");

            },
            error: function (err) {
                alert("Error: " + err.status + " " + err.statusText);
            }
        });
    };
    //************  Delete Customer  **********************//

    self.removeDetail = function () {
        var deleteCustomer = {
            customerID: self.customerDetails().CustomerId, // auto number field
            customerNRIC: self.customerDetails().CustomerNRIC,
            customerAddress: self.customerDetails().CustomerAddress,
            customerFirstName: self.customerDetails().CustomerFirstName,
            customerLastName: self.customerDetails().CustomerLastName,
            customerContactNumber: self.customerDetails().CustomerContactNumber,
            customerEmail: self.customerDetails().CustomerEmail,
            customerDOBDay: self.customerDetails().CustomerDOBDay,
            customerDOBMonth: self.customerDetails().CustomerDOBMonth,
            customerDOBYear: self.customerDetails().CustomerDOBYear,
            customerNationality: self.customerDetails().CustomerNationality,
            customerPassportNumber: self.customerDetails().CustomerPassportNumber
        };

        if (confirm('Are you sure to delete "' + deleteCustomer.customerID + '"?')) {
            $.ajax({
                type: 'DELETE',
                url: customerAPIURI + deleteCustomer.customerID,
                dataType: 'json',
                contentType: 'application/json',
                success: function (data) {
                    self.customers.remove(deleteCustomer);
                    alert("Record has been deleted!");
                    getListOfCustomers();

                },
                error: function (err) {
                    alert("Error: " + err.status + " " + err.statusText);
                }
            });
        };
    }





    //************  Get Customer details **********************//

    self.getCustomerDetails = function (item) {
        $.ajax({
            type: 'GET',
            url: customerAPIURI + "/" + item.CustomerId,
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                self.customerDetails(data);
            },
            error: function (err) {
                alert("Error: " + err.status + " " + err.statusText);
            }
        });
    }

    // search at client side----------------------------------------------------------------------------------------------------
    self.searchString = ko.observable('');
    self.searchCustomers = ko.computed(function () {
        if (!self.searchString()) {

            return self.customers();

        } else {
            return ko.utils.arrayFilter(self.customers(), function (customer) {
                return ko.utils.stringStartsWith(customer.CustomerEmail.toUpperCase(), self.searchString().toUpperCase());
            });
        }
    });

    //************  get list of Customer  **********************//
    function getListOfCustomers() {
        $.ajax({
            type: 'GET',
            url: customerAPIURI,
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                self.customers(data);
            },
            error: function (err) {
                alert("Error: " + err.status + " " + err.statusText);
            }
        });
    };
    
    getListOfCustomers();
};

ko.applyBindings(new ViewModel());
