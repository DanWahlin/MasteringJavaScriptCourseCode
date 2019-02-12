"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Auto =
/*#__PURE__*/
function () {
  function Auto(data) {
    _classCallCheck(this, Auto);

    this.make = data.make;
    this.model = data.model;
    this.year = data.year;
    this.price = data.price;
  }

  _createClass(Auto, [{
    key: "getTotal",
    value: function getTotal(taxRate) {
      return this.price + this.price * taxRate;
    }
  }, {
    key: "getDetails",
    value: function getDetails() {
      return this.year + ' ' + this.make + ' ' + this.model;
    }
  }]);

  return Auto;
}();

var Car =
/*#__PURE__*/
function (_Auto) {
  _inherits(Car, _Auto);

  function Car(data) {
    var _this;

    _classCallCheck(this, Car);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Car).call(this, data));
    _this.isElectric = data.isElectric;
    _this.isHatchback = data.isHatchback;
    return _this;
  }

  _createClass(Car, [{
    key: "getDetails",
    value: function getDetails() {
      var details = _get(_getPrototypeOf(Car.prototype), "getDetails", this).call(this);

      return details + ' Electric: ' + this.isElectric + ' Hatchback: ' + this.isHatchback;
    }
  }]);

  return Car;
}(Auto);

var Truck =
/*#__PURE__*/
function (_Auto2) {
  _inherits(Truck, _Auto2);

  function Truck(data) {
    var _this2;

    _classCallCheck(this, Truck);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Truck).call(this, data));
    _this2.is4by4 = data.is4by4;
    return _this2;
  }

  _createClass(Truck, [{
    key: "getDetails",
    value: function getDetails() {
      var details = _get(_getPrototypeOf(Truck.prototype), "getDetails", this).call(this);

      return details + ' 4X4: ' + this.is4by4;
    }
  }]);

  return Truck;
}(Auto);