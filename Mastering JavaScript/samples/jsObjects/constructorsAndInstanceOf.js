//Normal Constructor
function Customer(name) {
    this.name = name;
}

//Using the constructor to create an object instance
Customer('John');

console.log('Calling Customer as function so "this" will be window.');
console.log('window.name: ' + window.name);

//Constructor that requires "new"
function Person(name) {
    //Check if "this" is an InstanceOfCustomer object
    if (!(this instanceof Person)) {
        return new Person(name);
    }
    //"this" will be a Person now
    this.fullname = name;
}

Person('John');

console.log('\n');
console.log('Calling Person that has an instanceof check so "this" will be Person object');
console.log('window.fullname: ' + window.fullname);


