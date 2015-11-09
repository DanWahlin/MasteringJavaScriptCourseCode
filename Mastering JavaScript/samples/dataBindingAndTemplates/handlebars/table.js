Handlebars.registerHelper("getSaleCSSClass", function (sale) {
    return (sale) ? 'sale' : 'nosale';
});

var ViewModel = function (items) {

    render = function () {
        var total = 0;
        for (var i = 0, len = items.length; i < len; i++) {
            total += items[i].price;
        }

        var data = { total: total, items: items };

        var source = document.getElementById('tableTemplate').innerHTML;
        var template = Handlebars.compile(source);
        document.getElementById('container').innerHTML = template(data);

    };

    return {
        render: render
    }
};

var items = [
    { title: 'Game', price: 59.99, sale: true },
    { title: 'Movie Ticket', price: 9.99, sale: false }
];
var vm = new ViewModel(items);
vm.render();










