function Person() { }
Person.age = 50;

console.log('Person age is a static value: ' + Person.age);

var john = new Person();
console.log('Trying to call static age variable ' +
            'through an instance. Value is: ' + john.age);

//Another technique that uses closures (covered later in the course)
var staticId = (function () {
    var id = 0; // This is the private persistent value
    // The outer function returns a nested function that has access
    // to the persistent value.  It is this nested function we're storing
    // in the variable id above.
    return function () { return id++; };  // Return and increment
})(); // Invoke the outer function after defining it - returns the nested function

staticId(); // 0
staticId(); // 1
staticId(); // 2



