function Person() {
    this.name = 'Person Name';
}

Person.prototype.addOrder = function (order) {
    console.log('Added order: ' + order);
    Person.prototype.orderCount++;
};

Person.prototype.orderCount = 0;

function Customer(name) {
    this.name = name;
}
Customer.prototype = Object.create(Person.prototype);

function PremiumCustomer(name) { }
PremiumCustomer.prototype = Object.create(Customer.prototype);

var cust = new Customer('Customer Name');
cust.addOrder('Order 1');
cust.addOrder('Order 2');
cust.addOrder('Order 3');
console.log('Customer order count is: ' + cust.orderCount);

var premium = new PremiumCustomer('Premium Name');
console.log('No premium orders were placed but the order count has changed:');
console.log('Premium order count is: ' + premium.orderCount);



