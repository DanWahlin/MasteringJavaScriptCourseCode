var miles = 0;
var basePrice = 30000;

function start() {
    miles += 100;
    return 'Car Started';
}

function stop() {
    return 'Car Stopped';
}

function getPricing() {
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
}

function getMiles() {
    return miles;
}