"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = exports.Car = function () {
    function Car(make, model, engine, price) {
        _classCallCheck(this, Car);

        this._make = make;
        this._model = model;
        this._engine = engine;
        this._price = price;
        this._taxRate = .08;
    }

    _createClass(Car, [{
        key: "start",
        value: function start() {
            //Use a template string
            return this.make + " " + this.model + " with a \n                " + this.engine + " engine is started!";
        }
    }, {
        key: "getTotal",
        value: function getTotal() {
            return "Total cost is: " + (this._price * this._taxRate + this._price);
        }
    }, {
        key: "make",
        get: function get() {
            return this._make;
        }
    }, {
        key: "model",
        get: function get() {
            return this._model;
        }
    }, {
        key: "engine",
        get: function get() {
            return this._engine;
        }
    }]);

    return Car;
}();
//# sourceMappingURL=templateStrings.js.map
