var Auto = function() {}

Auto.prototype.getTotal = function(taxRate) {
    return this.price + (this.price * taxRate);
}

Auto.prototype.getDetails = function() {
    return this.year + ' ' + this.make + ' ' + this.model;
}

var Car = function(data) {
    this.make = data.make;
    this.model = data.model;
    this.year = data.year;
    this.price = data.price;
    this.isElectric = data.isElectric;
    this.isHatchback = data.isHatchback;
};

Car.prototype = Object.create(Auto.prototype);

Car.prototype.getDetails = function () {
    var details = Auto.prototype.getDetails.call(this);
    return details + ' Electric: ' + this.isElectric +
                        ' Hatchback: ' + this.isHatchback;
};

var Truck = function(data) {
    this.make = data.make;
    this.model = data.model;
    this.year = data.year;
    this.price = data.price;
    this.is4by4 = data.is4by4;
};

Truck.prototype = Object.create(Auto.prototype);

Truck.prototype.getDetails = function () {
    var details = Auto.prototype.getDetails.call(this);
    return details + ' 4X4: ' + this.is4by4;
};
