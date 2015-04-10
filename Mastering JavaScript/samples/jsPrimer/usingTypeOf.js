var Customer = function () { };
var cust = new Customer();
cust.firstName = 'John';
cust.lastName = 'Doe';

//Object Literal
var customer = {
    firstName: 'Jane',
    lastName: 'Doe'
};

var pets = new Array('Fido', 'Maestro'); //Array
var colors = ['Blue', 'Red', 'Yellow']; //Array

//Using typeof
console.log(typeof 4.5);
// → number
console.log(typeof 'Fred');
// → string
console.log(typeof true);
// → boolean
console.log(typeof cust);
// → object
console.log(typeof customer);
// → object
console.log(typeof pets);
// → object
console.log(typeof colors);
// → object