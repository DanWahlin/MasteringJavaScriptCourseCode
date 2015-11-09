var customersService = function ($) {

    //Return a promise
    this.getCustomersWithPromise = function () {
        return $.getJSON('customers.txt'); 
    };

    //Handle the callback
    this.getCustomersWithCallback = function (callback) {
        $.getJSON('customers.txt').then(function (data) {
            callback(data);
        });
    };

    return this;

}(jQuery); //IIFE

//Get data via a callback
customersService.getCustomersWithCallback(function (data) {
    //Promise resolved (no easy way to deal with an error though)
    var table = new TableHelper({
        data: data,
        containerId: 'tableContainerCallback'
    });
    table.render();
});

//Get data via a promise
customersService.getCustomersWithPromise()
    .then(function (data) {
        //Promise resolved
        var table = new TableHelper({
            data: data,
            containerId: 'tableContainerPromise'
        });
        table.render();
    }, function (xhr, status, err) { //Handle error easily
        alert(err.message);
    });
