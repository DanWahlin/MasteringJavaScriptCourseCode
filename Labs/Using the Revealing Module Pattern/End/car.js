var Car = function () {
    var miles = 0,
        basePrice = 30000,

    start = function () {
        miles += 100;
        return 'Car Started';
    },

    stop = function () {
        return 'Car Stopped';
    },

    getPricing = function () {
        var tax = basePrice * .08;
        var totalPrice = ((basePrice - miles) + tax).toFixed(2);

        //Create an object literal so multiple values can be returned
        //using a single object
        var total = {
            tax: tax,
            basePrice: basePrice,
            totalPrice: totalPrice
        };
        return total;
    },

    getMiles = function () {
        return miles;
    };

    return {
        start: start,
        stop: stop,
        getPricing: getPricing,
        getMiles: getMiles
    };
};