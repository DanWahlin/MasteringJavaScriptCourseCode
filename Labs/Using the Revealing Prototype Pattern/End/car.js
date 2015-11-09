var Car = function () {
    this.miles = 0;
    this.basePrice = 30000;
};

Car.prototype = function() {

    var start = function () {
        this.miles += 100;
        return 'Car Started';
    },

    stop = function () {
        return 'Car Stopped';
    },

    getPricing = function () {
        var tax = this.basePrice * .08;
        var totalPrice = ((this.basePrice - this.miles) + tax).toFixed(2);

        //Create an object literal so multiple values can be returned
        //using a single object
        var total = {
            tax: tax,
            basePrice: this.basePrice,
            totalPrice: totalPrice
        };
        return total;
    },

    getMiles = function () {
        return this.miles;
    };

    return {
        start: start,
        stop: stop,
        getPricing: getPricing,
        getMiles: getMiles
    }
}();