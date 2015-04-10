"use strict";
var Auto = function Auto(data) {
  this.make = data.make;
  this.model = data.model;
  this.year = data.year;
  this.price = data.price;
};
($traceurRuntime.createClass)(Auto, {
  getTotal: function(taxRate) {
    return this.price + (this.price * taxRate);
  },
  getDetails: function() {
    return this.year + ' ' + this.make + ' ' + this.model;
  }
}, {});
var Car = function Car(data) {
  $traceurRuntime.superCall(this, $Car.prototype, "constructor", [data]);
  this.isElectric = data.isElectric;
  this.isHatchback = data.isHatchback;
};
var $Car = Car;
($traceurRuntime.createClass)(Car, {getDetails: function() {
    var details = $traceurRuntime.superCall(this, $Car.prototype, "getDetails", []);
    return details + ' Electric: ' + this.isElectric + ' Hatchback: ' + this.isHatchback;
  }}, {}, Auto);
var Truck = function Truck(data) {
  $traceurRuntime.superCall(this, $Truck.prototype, "constructor", [data]);
  this.is4by4 = data.is4by4;
};
var $Truck = Truck;
($traceurRuntime.createClass)(Truck, {getDetails: function() {
    var details = $traceurRuntime.superCall(this, $Truck.prototype, "getDetails", []);
    return details + ' 4X4: ' + this.is4by4;
  }}, {}, Auto);
