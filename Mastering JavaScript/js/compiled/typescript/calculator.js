window.onload = function () {
    var calc = new Calculator('X', 'Y', 'Output');
};
var Calculator = (function () {
    function Calculator(xId, yId, outputId) {
        this.x = document.getElementById(xId);
        this.y = document.getElementById(yId);
        this.output = document.getElementById(outputId);
        this.wireEvents();
    }
    Calculator.prototype.wireEvents = function () {
        var _this = this;
        document.getElementById('Add').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.add(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
        });
        document.getElementById('Subtract').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.subtract(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
        });
    };
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    return Calculator;
})();
