function Person() {
    this.name = 'Person Name';
}

Person.prototype.addOrder = function (order) {
    console.log('Added order: ' + order);
};

function Customer(name) {
    this.name = name;
}

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

console.log('Creating Customer object which "derives" from Person');
var cust = new Customer('Customer Name');

cust.addOrder('Order 1');
console.log('Customer name is: ' + cust.name);


