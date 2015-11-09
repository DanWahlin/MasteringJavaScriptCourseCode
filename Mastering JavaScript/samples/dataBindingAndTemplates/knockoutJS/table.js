var ProductsViewModel = function (items) {
    var vm = this;
    vm.items = ko.observableArray(items);
    vm.total = ko.observable();

    vm.getSaleClass = function (sale) {
        return (sale) ? 'sale' : 'nosale';
    }

    vm.init = function () {
        //Update total property
        var total = 0;
        for (var i = 0, len=vm.items().length; i < len; i++) {
            total += vm.items()[i].price;
        }
        vm.total(total);
    }
};

var items = [
    { title: 'Game', price: 59.99, sale: true },
    { title: 'Movie Ticket', price: 9.99, sale: false }
];
var viewModel = new ProductsViewModel(items);
viewModel.init();
ko.applyBindings(viewModel);

