var person = {
    firstName: 'John',
    lastName: 'Doe'
};
person.age = 24;
person['street'] = '123 Main St.';

console.log('Loop through Object Literal keys:');
for (var key in person) {
    console.log(key + ' = ' + person[key]);
}

/****
   Show how custom prototype properties are enumerable by default
****/

Object.prototype.loginAttempts = 0;

console.log('\nLoop through Object Literal keys when Object.prototype.loginAttempts is added');
for (var key in person) {
    console.log(key + ' = ' + person[key]);
}

/****
   Looping through direct properties while ignoring prototype properties using hasOwnProperty
****/

console.log('\nLoop with hasOwnProperty() call:');
for (var key in person) {
    if (person.hasOwnProperty(key))
        console.log(key + ' = ' + person[key]);
}

delete Object.prototype.loginAttempts;

Object.defineProperty(Object.prototype, 'loginAttempts',
                      { enumerable: false, value: 0 });

console.log('\nLoop when defineProperty used to create Object.prototype.loginAttempts:');
for (var key in person) {
    console.log(key + ' = ' + person[key]);
}

/****
    Demonstration of get/set with defineProperty
****/

Object.defineProperty(Object.prototype, 'fullName', {
    get: function () { return this.firstName + ' ' + this.lastName; },
    set: function(val) {
        if (val) {
            var names = val.split(' ');
            this.firstName = names[0];
            this.lastName = names[1];
        }
    },
    enumerable: true
});

console.log('\nTesting fullName get/set blocks:')
person.fullName = 'Jane Smith';
console.log(person.fullName);

console.log('\nLoop when defineProperty used to add Object.prototype.fullName with enumerable: true');
for (var key in person) {
    console.log(key + ' = ' + person[key]);
}

/****
    Demonstration of prototype-less object (alternative to hasOwnProperty)
****/
console.log('\nCreate a prototype-less customer object: var customer = Object.create(null);');
var customer = Object.create(null);
customer.name = 'Fred Johnson';
console.log('toString in customers? ' + ('toString' in customer));

console.log('\nLoop through prototype-less properties');
for (var key in customer) {
    console.log(key + ' = ' + customer[key]);
}

/****
    Locking properties down with writable: false (the default value)
****/
console.log('\nLocking properties down with writable: false (the default value)');
var obj = {}; // Creates a new object

Object.defineProperty(obj, 'myProp', {
    value: 15,
    writable: false
});

console.log(obj.myProp); // logs 15
console.log('Trying to change myProp from 15 to 20...');
obj.myProp = 20; // No error thrown (it would throw in strict mode, even if the value had been the same)
console.log(obj.myProp);
console.log('Because writable: false the value can not be changed');