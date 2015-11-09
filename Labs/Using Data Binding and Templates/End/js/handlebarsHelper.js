Handlebars.registerHelper("highlightCity", function (city) {
    var highlightedCities = ['Phoenix', 'Seattle', 'Orlando'];
    return (highlightedCities.indexOf(city) > -1) ? 'highlight' : '';
});
