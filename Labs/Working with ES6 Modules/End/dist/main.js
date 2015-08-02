'use strict';

var _distAutosJs = require('dist/autos.js');

var car = new _distAutosJs.Car({
	price: 30000, make: 'Chevy', model: 'Malibu',
	year: 2014, isElectric: false, isHatchback: false
});

var truck = new _distAutosJs.Truck({
	price: 40000, make: 'Ford', model: 'F150',
	year: 2014, is4by4: true
});

var output = document.getElementById('output');
output.innerHTML += '<br />' + car.getDetails();
output.innerHTML += '<br />' + truck.getDetails();
output.innerHTML += '<br />Car total: ' + car.getTotal(.08);
output.innerHTML += '<br />Truck total: ' + truck.getTotal(.08);