var Auto = function() {
    var Auto = function Auto(data) {
        this.make = data.make;
        this.model = data.model;
        this.year = data.year;
        this.price = data.price;
    };

    Object.defineProperties(Auto.prototype, {
        getTotal: {
            writeable: true,

            value: function(taxRate) {
                return this.price + (this.price * taxRate);
            }
        },

        getDetails: {
            writeable: true,

            value: function() {
                return this.year + ' ' + this.make + ' ' + this.model;
            }
        }
    });

    return Auto;
}();

var Car = function(Auto) {
    var Car = function Car(data) {
        Auto.call(this, data);
        this.isElectric = data.isElectric;
        this.isHatchback = data.isHatchback;
    };

    Car.prototype = Object.create(Auto.prototype, {
        constructor: {
            value: Car,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });

    Car.__proto__ = Auto;

    Object.defineProperties(Car.prototype, {
        getDetails: {
            writeable: true,

            value: function() {
                var details = Auto.prototype.getDetails.call(this);
                return details + ' Electric: ' + this.isElectric +
                                ' Hatchback: ' + this.isHatchback;
            }
        }
    });

    return Car;
}(Auto);

var Truck = function(Auto) {
    var Truck = function Truck(data) {
        Auto.call(this, data);
        this.is4by4 = data.is4by4;
    };

    Truck.prototype = Object.create(Auto.prototype, {
        constructor: {
            value: Truck,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });

    Truck.__proto__ = Auto;

    Object.defineProperties(Truck.prototype, {
        getDetails: {
            writeable: true,

            value: function() {
                var details = Auto.prototype.getDetails.call(this);
                return details + ' 4X4: ' + this.is4by4;
            }
        }
    });

    return Truck;
}(Auto);
