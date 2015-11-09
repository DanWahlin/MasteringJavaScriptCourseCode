var person = {
    name: 'Person Name',
    addOrder: function (order) {
        console.log('Added order: ' + order);
    }
};

function Customer(name) {
    this.name = name;
}

Customer.prototype = Object.create(person);

console.log('Creating Customer object which "derives" from person object literal');
var cust = new Customer('Customer Name');

cust.addOrder('Order 1');
console.log('Customer name is: ' + cust.name);


