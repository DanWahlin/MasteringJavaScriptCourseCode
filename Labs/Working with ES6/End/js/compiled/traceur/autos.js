"use strict";
var Auto = function() {
  function Auto(data) {
    this.make = data.make;
    this.model = data.model;
    this.year = data.year;
    this.price = data.price;
  }
  return ($traceurRuntime.createClass)(Auto, {
    getTotal: function(taxRate) {
      return this.price + (this.price * taxRate);
    },
    getDetails: function() {
      return this.year + ' ' + this.make + ' ' + this.model;
    }
  }, {});
}();
var Car = function($__super) {
  function Car(data) {
    $traceurRuntime.superConstructor(Car).call(this, data);
    this.isElectric = data.isElectric;
    this.isHatchback = data.isHatchback;
  }
  return ($traceurRuntime.createClass)(Car, {getDetails: function() {
      var details = $traceurRuntime.superGet(this, Car.prototype, "getDetails").call(this);
      return details + ' Electric: ' + this.isElectric + ' Hatchback: ' + this.isHatchback;
    }}, {}, $__super);
}(Auto);
var Truck = function($__super) {
  function Truck(data) {
    $traceurRuntime.superConstructor(Truck).call(this, data);
    this.is4by4 = data.is4by4;
  }
  return ($traceurRuntime.createClass)(Truck, {getDetails: function() {
      var details = $traceurRuntime.superGet(this, Truck.prototype, "getDetails").call(this);
      return details + ' 4X4: ' + this.is4by4;
    }}, {}, $__super);
}(Auto);
