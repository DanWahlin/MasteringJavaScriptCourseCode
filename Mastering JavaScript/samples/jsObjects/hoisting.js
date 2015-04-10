var name = getName('Jesse', 'James');
console.log('JavaScript hoisting in action: ' + name);

//Function will be moved to the top automatically
function getName(firstName, lastName) {
    return firstName + ' ' + lastName;
}



