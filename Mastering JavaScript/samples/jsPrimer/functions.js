function add(x, y) {
    console.log(x + ' + ' + y + ' = ' + (x + y));
}

function subtract(x, y) {
    console.log(x + ' - ' + y + ' = ' + (x - y));
}

function multiply(x, y) {
    console.log(x + ' * ' + y + ' = ' + (x * y));
}

function divide(x, y) {
    console.log(x + ' / ' + y + ' = ' + (x / y));
}

add(2, 2);
subtract(2, 2);
multiply(3, 3);
divide(3, 3);

//Functions as objects
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var person = new Person('John', 'Doe');
console.log(person.firstName + ' ' + person.lastName);
