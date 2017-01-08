'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Auto = function () {
    function Auto(data) {
        _classCallCheck(this, Auto);

        this.make = data.make;
        this.model = data.model;
        this.year = data.year;
        this.price = data.price;
    }

    _createClass(Auto, [{
        key: 'getTotal',
        value: function getTotal(taxRate) {
            return this.price + this.price * taxRate;
        }
    }, {
        key: 'getDetails',
        value: function getDetails() {
            return this.year + ' ' + this.make + ' ' + this.model;
        }
    }]);

    return Auto;
}();

var Car = function (_Auto) {
    _inherits(Car, _Auto);

    function Car(data) {
        _classCallCheck(this, Car);

        var _this = _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).call(this, data));

        _this.isElectric = data.isElectric;
        _this.isHatchback = data.isHatchback;
        return _this;
    }

    _createClass(Car, [{
        key: 'getDetails',
        value: function getDetails() {
            var details = _get(Car.prototype.__proto__ || Object.getPrototypeOf(Car.prototype), 'getDetails', this).call(this);
            return details + ' Electric: ' + this.isElectric + ' Hatchback: ' + this.isHatchback;
        }
    }]);

    return Car;
}(Auto);

var Truck = function (_Auto2) {
    _inherits(Truck, _Auto2);

    function Truck(data) {
        _classCallCheck(this, Truck);

        var _this2 = _possibleConstructorReturn(this, (Truck.__proto__ || Object.getPrototypeOf(Truck)).call(this, data));

        _this2.is4by4 = data.is4by4;
        return _this2;
    }

    _createClass(Truck, [{
        key: 'getDetails',
        value: function getDetails() {
            var details = _get(Truck.prototype.__proto__ || Object.getPrototypeOf(Truck.prototype), 'getDetails', this).call(this);
            return details + ' 4X4: ' + this.is4by4;
        }
    }]);

    return Truck;
}(Auto);