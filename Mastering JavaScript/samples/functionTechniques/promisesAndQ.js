var customersService = function () {

    var data = [
        { "firstName": "Jane", "lastName": "Doe", "city": "Phoenix" },
        { "firstName": "John", "lastName": "Doe", "city": "Phoenix" },
        { "firstName": "Michelle", "lastName": "Thompson", "city": "Seattle" },
        { "firstName": "Jose", "lastName": "Rodriguez", "city": "California" },
        { "firstName": "Tina", "lastName": "Smith", "city": "New York City" }
    ];

    //Create a deferred object and return a promise. Once data is available resolve the promise
    this.getCustomers = function () {

        var deferred = Q.defer(); //Create deferred object

        //Simulate delay
        window.setTimeout(function () {
            deferred.resolve(data); //Resolve the promise
        }, 2000);

        return deferred.promise; //Return the promise
    };

    return this;

}(); //IIFE
