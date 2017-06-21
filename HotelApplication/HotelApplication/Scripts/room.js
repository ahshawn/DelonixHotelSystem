var ViewModel = function () {
    var self = this;
    self.rooms = ko.observableArray();
    self.error = ko.observable();

    var roomAvaliableURL = '../api/rooms';
    var customerAPIURI = '../api/customers';

    //************  get list of ROom  **********************//
    self.confirmCustomerDetails = function (item) {
        $.ajax({
            type: 'GET',
            url: customerAPIURI + "/" + item.customerID,
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

    //************  get list of ROom  **********************//
    function getListOfRoom() {
        $.ajax({
            type: 'GET',
            url: roomAvaliableURL,
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                self.rooms(data);
            },
            error: function (err) {
                alert("Error: " + err.status + " " + err.statusText);
            }
        });
    };

    getListOfRoom();
};

ko.applyBindings(new ViewModel());