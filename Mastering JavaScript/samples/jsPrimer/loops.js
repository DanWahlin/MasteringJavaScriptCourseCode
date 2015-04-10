console.log('\nUsing a for loop');

var records = ['One', 'Two', 'Three'];

for (var i = 0; i < records.length; i++) {
    console.log('On record: ' + records[i]);
}

console.log('\nUsing a for...in loop');
var counter = 0;
while (counter < records.length) {
    console.log('while loop found: ' + records[counter]);
    counter++;
}


var customer = {
    name: 'John Doe',
    age: 50
};

console.log('\nUsing a for...in loop');
for (var key in customer) {
    console.log('Found property: ' + key + ' = ' + customer[key]);
}