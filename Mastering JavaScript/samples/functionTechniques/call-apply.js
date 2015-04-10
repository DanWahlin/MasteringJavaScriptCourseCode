var giants = {
    name: 'New York Giants',
    play: function () {
        log('We are the ' + this.name);
    }
}

var packers = Object.create(giants);
packers.name = 'Green Bay Packers';

console.clear();
console.log('Calling giants.play');
giants.play() //"this" is giants

console.log('Calling packers.play');
packers.play() //"this" is packers


//Using call(), apply(), and bind()

var cardinals = {
    name: 'Arizona Cardinals',
    message: 'Smash!'
};

var seahawks = {
    name: 'Seattle Seahawks',
    message: 'Crush!'
}

var TauntMachine = function () {
    this.taunt = function (foe) {
        var msg = 'We will ' + this.message + ' the ' + foe.name +
                  ', we are the ' + this.name;
        log(msg);
    };
};

var tauntMachine = new TauntMachine();
console.log('What is wrong here?');
tauntMachine.taunt(seahawks, cardinals.message);

console.log('\nUsing call() to set "cardinals" as "this" and pass '+
            'the seahawks object to taunt()');

tauntMachine.taunt.call(cardinals, seahawks);

console.log('\nUsing apply() to set "seahawks" as "this" and pass ' +
            'the cardinals object to taunt()');
tauntMachine.taunt.apply(seahawks, [cardinals]);

console.log('\nBinding cardinals to tauntMachine.taunt using bind()');

var cardinalsTaunt = tauntMachine.taunt.bind(cardinals);
cardinalsTaunt(seahawks);
