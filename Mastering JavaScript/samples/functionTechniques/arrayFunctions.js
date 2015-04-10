var nfcTeams = [],
    afcTeams = [];

//Using push()
nfcTeams.push('Green Bay Packers');
nfcTeams.push('Arizona Cardinals');
nfcTeams.push('Seattle Seahawks');
nfcTeams.push('San Francisco 49ers');


afcTeams.push('New York Giants');
afcTeams.push('Baltimore Ravens');
afcTeams.push('Denver Broncos');
afcTeams.push('Kansas City Chiefs');

log('Using push()');
log('NFC Teams (push): ' + nfcTeams);
log('AFC Teams (push): ' + afcTeams);

//Using concat()
var allTeams = nfcTeams.concat(afcTeams);

log('\n<br />Using concat()');
log('Combined Teams (concat): ' + allTeams);

//Using pop()
allTeams.pop();
allTeams.pop();

log('Popped two teams off AllTeams: ' + allTeams);

//Using forEach()
log('\n<br />Using forEach()');
nfcTeams.forEach(function (team, index) {
    log('Team: ' + index + ' ' + team);
});

//Using filter()
var matches = nfcTeams.filter(function (team) {
    if (team.indexOf('S') == 0) {
        return true;
    }
    return false;
});

log('\n<br />Filtered matches: ');
matches.forEach(function (team) {
    log('Filtered Team: ' + team);
});


//Using indexOf()
log('\n<br />Using indexOf()');
var index = afcTeams.indexOf('Denver Broncos');
log('Found Denver Broncos in AFC at position: ' + index);

//Using map()
log('\n<br /r>Using map()');
var mappedNewArray = nfcTeams.map(function (team, index) {
    return '<br />' + team + ' ' + (index + 1);
});
log('Result of map (new array created): ' + mappedNewArray);

//Using reduce()
log('\n<br />Using reduce()');
var points = [32, 27, 10, 21];
var totalPoints = points.reduce(function (a, b) {
    return a + b;
});
log('Points: ' + points);
log('Total points after reduce: ' + totalPoints);

//Using slice()
log('\n<br />Using slice() to create a new array');
log('AFC teams before slice operation: ' + afcTeams);
var slicedAfc = afcTeams.slice(0, 2);
log('New AFC teams after slice(0,2): ' + slicedAfc);
log('AFC teams after slice(): ' + afcTeams);

//Using splice()
log('\n<br />Using splice()');
log('Current NFC: ' + nfcTeams);
log('Splicing out 2nd team from NFC');
nfcTeams.splice(1, 1);
log('NFC after splice: ' + nfcTeams);
nfcTeams.splice(1, 0, 'Dallas Cowboys');
log('Adding Dallas Cowboys to position 1 (removing 0) using splice(): ' + nfcTeams);

//Using unshift()
log('\n<br />Using unshift()');
afcTeams.unshift('New England Patriots');
log('AFC teams after unshift and addition of Patriots: ' + afcTeams);