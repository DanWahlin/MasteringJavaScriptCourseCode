var customersService = function () {

    this.showMessage = function () {
        alert('Hello from an IIFE');
    };

    return this;

}();

customersService.showMessage();
