//== vs. ===
var x = 1;
var y = '1';

console.log('x == y: ' + (x == y));     //true
console.log('x === y: ' + (x === y));   //false

var age = 50;
console.log('age = 50');

//Check if age is "truth-y"
if (age) {
    console.log('age is truth-y');
}

var age = 50;

if (age > 10 && age <= 50) {
    console.log('age is greater than 10 and less than or equal to 50');
}
else if (age > 50) {
    console.log('age is greater than 50');
}
else {
    console.log('age is less than 10');
}

//shortcut conditional operator
var output = (age == 50) ? 'age is 50' : 'age is not 50';
console.log('Shortcut conditional says: ' + output);

var name = 'Fred';
console.log('name = "Fred"');

switch (name) {
    case 'Tim':
        console.log('case name = Tim hit');
        break;
    case 'Tina':
        console.log('case name = Tina hit');
        break;
    case 'Fred':
        console.log('case name = Fred hit');
        break;
    default:
        console.log('name is ' + name);
        break;
}




