Handlebars.registerHelper("highlightCity", function (city) {
    var highlightedCities = ['Dallas', 'Seattle','Orlando'];
    return (highlightedCities.indexOf(city) > -1) ? 'highlight' : '';
});

var data = { name: 'John', city: 'Dallas' };

var renderer = function (data) {
    var source = document.getElementById('personTemplate').innerHTML;
    var template = Handlebars.compile(source);
    document.getElementById('container').innerHTML = template(data);
}(data);



