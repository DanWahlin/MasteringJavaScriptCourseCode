//Constructor
function Customer(firstName, lastName, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
}

//Using the constructor to create an object instance
var john = new Customer('John', 'Doe', 'Seattle');

console.log('Invoked Customer constructor and passed (\'John\', \'Doe\', \'Seattle\')');
console.log('john is instanceof Customer: ' + (john instanceof Customer)); //true
console.log(john);

var michelle = new Customer('Michelle', 'Seattle');

console.log('Invoked Customer constructor and passed ' +
            '(\'michelle\',\'Seattle\') - anything wrong?');
console.log(michelle);

//Constructor (passing object literal)
function Customer2(info) {
    this.firstName = info.firstName;
    this.lastName = info.lastName;
    this.city = info.city;
}

//Using the constructor to create an object instance
var tina = new Customer2({ firstName: 'Tina', lastName: 'Doe', city: 'Seattle' });

console.log('\nInvoked Customer2 constructor and passed ' +
            '({firstName:\'Tina\', lastName:\'Doe\', city:\'Seattle\'})');
console.log(tina);

//Skipping some values
var steve = new Customer2({ firstName: 'Steve', city: 'Seattle' });
console.log('\nInvoked Customer2 constructor and passed ' + 
            '{ firstName: \'Steve\', city: \'Seattle\' }');
console.log(steve);

