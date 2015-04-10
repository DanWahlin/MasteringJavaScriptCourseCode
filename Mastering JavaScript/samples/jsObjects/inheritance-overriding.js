function Person() {
    this.name = 'Person Name';
}

Person.prototype.addOrder = function (order) {
    console.log('Added order: ' + order + ' for ' + this.name);
};

function Customer(name) {
    this.name = name;
}

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer; //Optional here
//Override addOrder
Customer.prototype.addOrder = function (order) {
    //What's wrong with this (hint: look at the name that is written out...'undefined')
    //We'll learn how to fix this in a later chapter when we discuss call()
    Person.prototype.addOrder('Special Order ' + order);
}

console.log('Creating Customer object which "derives" from Person');
var cust = new Customer('Customer Name');
cust.addOrder('Order 1');
console.log('Customer name is: ' + cust.name);


