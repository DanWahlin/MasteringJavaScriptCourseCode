//Working with variables
var name = 'Jane Doe',
    age = 57,
    isRegistered = true,
    pets = [ 'Fido', 'Fluffy', 'Peppy'];

//Logging variables
console.log(name);
console.log(age);
console.log(isRegistered);
console.log(pets);
console.log('Logging Pets using a for loop (except Peppy)')
for (var i=0;i < pets.length;i++) {
    if (pets[i] !== 'Peppy') {
        console.log(pets[i]);
    }
}
console.log('');
//Working with functions
function add(x,y) {
    console.log('Add Result: ' + (x + y));
}

add(40,56);
console.log('');

//Functions as an Object
function Person(name, age, isRegistered) {
    this.name = name;
    this.age = age;
    this.isRegistered = isRegistered;
}

var person = new Person('John Doe', 26, false);
console.log('Person (function/object): ' + person.name + ' ' + person.age + ' ' + person.isRegistered);
console.log('');

//Working with Object Literals
var customer = {
    name: 'Tina Thomas',
    age: 35,
    isRegistered: true
};

console.log('Customer (object literal): ' + customer.name + ' ' + customer.age + ' ' + customer.isRegistered);


