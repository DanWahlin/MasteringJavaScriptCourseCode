class Auto {

    constructor(data) {
        this.make = data.make;
        this.model = data.model;
        this.year = data.year;
        this.price = data.price;
    }

    getTotal(taxRate) {
        return this.price + (this.price * taxRate);
    }

    getDetails() {
        return this.year + ' ' + this.make + ' ' + this.model;
    }

}

class Car extends Auto {

    constructor(data) {
        super(data);
        this.isElectric = data.isElectric;
        this.isHatchback = data.isHatchback;
    }

    getDetails() {
        var details = super.getDetails();
        return details + ' Electric: ' + this.isElectric +
                        ' Hatchback: ' + this.isHatchback;
    }
}


class Truck extends Auto {

    constructor(data) {
        super(data);
        this.is4by4 = data.is4by4;
    }

    getDetails() {
        var details = super.getDetails();
        return details + ' 4X4: ' + this.is4by4;
    }

}
