//Object
var Customer = function () { };

var cust = new Customer();
cust.firstName = 'John';
cust.lastName = 'Doe';

//Object Literal
var customer = {
    firstName: 'Jane',
    lastName: 'Doe'
};

console.log('Customer Object: ' + cust.firstName + ' ' + cust.lastName);
console.log('Customer Object Literal: ' + customer.firstName + ' ' + customer.lastName);