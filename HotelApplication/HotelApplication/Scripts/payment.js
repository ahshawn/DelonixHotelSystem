var ViewModel = function () {
    var self = this;
    self.payments = ko.observableArray();
    self.error = ko.observable();
    self.details = ko.observable();



    var type = "all";




    self.newPayment = {
        paymentID: ko.observable(),
        paymentType: ko.observable(),
        paymentCreditCardNumber: ko.observable(),
        paymentCardType: ko.observable(),
        paymentExpiryMonth: ko.observable(),
        paymentExpiryYear: ko.observable(),
        paymentCVC: ko.observable(),
    };

    self.formatOptionValue = ko.observable("Paperback");
    self.updateImage = ko.observable();

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

    self.savePayment = function () {


        var updatePayment = {
            paymentID: self.details().PaymentId,
            paymentType: self.details().PaymentType,
            paymentCreditCardNumber: self.details().PaymentCreditCardNumber,
            paymentCardType: self.details().PaymentCardType,
            paymentExpiryMonth: self.details().PaymentExpiryMonth,
            paymentExpiryYear: self.details().PaymentExpiryYear,
            paymentCVC: self.details().PaymentCVC

        };

        $.ajax({
            type: 'PUT',
            url: paymentURL + "/" + updatePayment.paymentID,
            data: JSON.stringify(updatePayment),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                self.payments.replace(data);
                getAllPayments();
                alert("Record updated successfully!");

            },
            error: function (err) {
                alert("Error: " + err.status + " " + err.statusText);
            }
        });
    };
    // end of method to save the updated product details



    // Add product ---------------------------------------------------------------------------------------------------------------------

    self.addPayment = function () {
        var aPayment = {
            paymentID: self.newPayment.PaymentId(), // auto number field
            paymentType: self.newPayment.PaymentType(),
            paymentCreditCardNumber: self.newPayment.PaymentCreditCardNumber(),
            paymentCardType: self.newPayment.PaymentCardType(),
            paymentExpiryMonth: self.newPayment.PaymentExpiryMonth(),
            paymentExpiryYear: self.newPayment.PaymentExpiryYear(),
            paymentCVC: self.newPayment.PaymentCVC()
        };

        $.ajax({
            type: 'POST',
            url: paymentURL,
            data: JSON.stringify(aPayment),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                self.payments.push(data);
                getAllPayments();
                var url = 'loadingCreditCard';
                window.location.href = url;


            },
            error: function (err) {
                alert("Error: " + err.status + " " + err.statusText);
            }


        });
    };






    self.removePayment = function () {
        var thePayment = {
            paymentID: self.details().PaymentId,
            paymentType: self.details().PaymentType,
            paymentCreditCardNumber: self.details().PaymentCreditCardNumber,
            paymentCardType: self.details().PaymentCardType,
            paymentExpiryMonth: self.details().PaymentExpiryMonth,
            paymentExpiryYear: self.details().PaymentExpiryYear,
            paymentCVC: self.details().PaymentCVC,
        };

        if (confirm('Are you sure to delete "' + thePayment.paymentCreditCardNumber + '"?')) {
            $.ajax({
                type: 'DELETE',
                url: paymentURL + "/" + thePayment.paymentID,
                dataType: 'json',
                contentType: 'application/json',
                success: function (data) {
                    self.payments.remove(thePayment);
                    getAllPayments();
                    alert("Record has been deleted!");

                },
                error: function (err) {
                    alert("Error: " + err.status + " " + err.statusText);
                }
            });
        };
    }






    self.getPaymentDetail = function (item) {
        $.ajax({
            type: 'GET',
            url: paymentURL + "/" + item.PaymentID,
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

    //************  Remember to change the URI accordingly  **********************//
    var paymentURL = '../api/Payments/';

    //** this section contains all the AJAX call to the Web APIs **//
    // function to retrieve all products using AJAX call to web API
    function getAllPayments() {
        $.ajax({
            type: 'GET',
            url: paymentURL,
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                self.payments(data);
            },
            error: function (err) {
                alert("Error: " + err.status + " " + err.statusText);
            }
        });
    };
    // end of function to retrieve all products
    //** this is the end of the section contains all the AJAX call to the Web APIs **//

    // Fetch the initial data
    getAllPayments();
};

ko.applyBindings(new ViewModel());
