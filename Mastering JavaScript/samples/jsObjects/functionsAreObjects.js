//Functions as objects
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var Customer = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

var client = {
    firstName: 'John',
    lastName: 'Doe',
    concat: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log('Person is a ' + typeof Person);
console.log('Customer is a ' + typeof Customer);
console.log('client.concat is a ' + typeof client.concat);

var person = new Person('Tina', 'Smith');
var customer = new Customer('John', 'Doe');

console.log('New person is a ' + typeof person);
console.log('New customer is a ' + typeof customer);
