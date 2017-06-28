var ViewModel = function () {
    var self = this;
    self.orders = ko.observableArray();
    self.error = ko.observable();
    self.details = ko.observable();


    var orderURL = '../api/orderDetails/';

    self.newOrder = {
        orderDetailID: ko.observable(),
        roomType: ko.observable(),
        roomPrice: ko.observable(),
        roomFloor: ko.observable(),
        roomRemarks: ko.observable(),
        totalNumberOfDays: ko.observable(),
        totalNumberOfGuest: ko.observable(),
        totalCost: ko.observable(),
        orderRemarks: ko.observable(),
        customerID: ko.observable(),
        paymentID: ko.observable()
    };

    self.addOrder = function () {
        var xOrder = {
            orderDetailID: self.newOrder.orderDetailID(),
            totalNumberOfGuest: self.newOrder.totalNumberOfGuest(),
            totalNumberOfDays: self.newOrder.totalNumberOfDays(),
            roomID: 1,
            CheckInTime: new Date(),
            CheckOutTime: new Date(),
            roomType: self.newOrder.roomType(),
            roomFloor: self.newOrder.roomFloor(),
            roomRemarks: self.newOrder.roomRemarks(),
            customerID: self.newOrder.customerID(),
            roomPrice: self.newOrder.roomPrice(),
            paymentID: self.newOrder.paymentID(),
            orderRemarks: self.newOrder.orderRemarks(),
            totalCost: self.newOrder.totalCost(),
            CheckoutStatus: "Not Done",
            totalAdult: 0,
            totalChild: 0
        };
        console.log(xOrder);

        $.ajax({
            type: 'POST',
            url: orderURL,
            data: JSON.stringify(xOrder),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                self.orders.push(data);
                var url = 'choosePaymentMethod';
                window.location.href = url;
                alert("Success");

            },
            error: function (err) {
                alert("Error: " + err.status + " " + err.statusText);
            }


        });
    };


    //************  Update Customer  **********************//
    self.updateDetail = function () {

        var updateOrder = {
            orderDetailID: self.details().orderDetailID, // auto number field
            totalNumberOfGuest: self.details().totalNumberOfGuest,
            totalNumberOfDays: self.details().totalNumberOfDays,
            roomType: self.details().roomType,
            roomFloor: self.details().roomFloor,
            roomRemarks: self.details().roomRemarks,
            customerID: self.details().customerID,
            roomPrice: self.details().roomPrice,
            orderRemarks: self.details().orderRemarks,
            totalCost: self.details().totalCost,
            paymentID: self.details().paymentID

        };

        $.ajax({
            type: 'PUT',
            url: orderURL + updateOrder.orderDetailID,
            data: JSON.stringify(updateOrder),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                self.orders.replace(data);
                getAllOrder();
                alert("Record updated successfully!");

            },
            error: function (err) {
                alert("Error: " + err.status + " " + err.statusText);
            }
        });
    };


    self.removeDetail = function () {
        var deleteOrder = {
            orderDetailID: self.details().orderDetailID, // auto number field
            totalNumberOfGuest: self.details().totalNumberOfGuest,
            totalNumberOfDays: self.details().totalNumberOfDays,
            roomType: self.details().roomType,
            roomFloor: self.details().roomFloor,
            roomRemarks: self.details().roomRemarks,
            customerID: self.details().customerID,
            roomPrice: self.details().roomPrice,
            orderRemarks: self.details().orderRemarks,
            totalCost: self.details().totalCost,
            paymentID: self.details().paymentID
        };

        if (confirm('Are you sure to delete "' + deleteOrder.orderDetailID + '"?')) {
            $.ajax({
                type: 'DELETE',
                url: orderURL + deleteOrder.orderDetailID,
                dataType: 'json',
                contentType: 'application/json',
                success: function (data) {
                    self.orders.remove(deleteOrder);
                    alert("Record has been deleted!");
                    getAllOrder();

                },
                error: function (err) {
                    alert("Error: " + err.status + " " + err.statusText);
                }
            });
        };
    }

    self.getOrderDetails = function (item) {
        $.ajax({
            type: 'GET',
            url: orderURL + "/" + item.orderDetailID,
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

    function getAllOrder() {
        $.ajax({
            type: 'GET',
            url: orderURL,
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                self.orders(data);
            },
            error: function (err) {
                alert("Error: " + err.status + " " + err.statusText);
            }
        });
    };
    getAllOrder();
};

ko.applyBindings(new ViewModel());