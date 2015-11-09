var app = angular.module('productsApp', []);

app.controller('ProductsController', function () {

    var vm = this;
    
    vm.total = 0;
    vm.items = [
        { title: 'Game', price: 59.99, sale: true },
        { title: 'Movie Ticket', price: 9.99, sale: false }
    ];

    function init() {
        var total = 0;
        for (var i = 0, len = vm.items.length; i < len; i++) {
            total += vm.items[i].price;
        }
        vm.total = total;
    }

    init();

});









