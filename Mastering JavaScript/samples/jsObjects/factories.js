//Note that caller won't be acessible when using 'use strict'
var person = function () {
    if (person.caller != personFactory.create) {
        throw new Error('There is no public constructor for person.');
    }
};

person.base = {
    firstName: '',
    lastName: '',
    type: 'Customer',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

var personFactory = {
    create: function (type, firstName, lastName) {
        var per = Object.create(person.base);
        per.firstName = firstName;
        per.lastName = lastName;
        if (type === 'Manager') {
            var mgr = Object.create(per);
            mgr.type = 'Manager';
            mgr.employees = 50;
            return mgr;
        }
        return per;
    }
};

//Use the personFactory to create an instance
var p = personFactory.create('Customer', 'John', 'Doe');
console.log('Person type: ' + p.type);
console.log('Person name: ' + p.getFullName());

//This will fail – have to go through factory
try {
    var p2 = new person();
}
catch (e) {
    console.log('Unable to create an instance of person using "new". p2 = ' + p2);
    console.log(e.message);
}



