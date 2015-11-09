'use strict';
var Calculator = function () {
    this.value1 = 0;
    this.value2 = 0;
    this.output = '';
};

Calculator.prototype.init = function () {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0, len = buttons.length; i < len; i++) {
        //Ensure that button represents Calculator
        buttons[i].addEventListener('click', this.checkOperator.bind(this));
    }
    this.value1 = document.getElementById('value1');
    this.value2 = document.getElementById('value2');
    this.output = document.getElementById('output');
};

Calculator.prototype.checkOperator = function (e) {
    //"this" will normally be the button that triggered the event
    //Because bind was used "this" represents the Calculator object though
    this.calculate(e.target.innerHTML);
};

Calculator.prototype.calculate = function (operator) {
    var val1 = parseInt(this.value1.value),
        val2 = parseInt(this.value2.value);
    switch (operator) {
        case '+':
            this.updateUI(val1 + val2);
            break;
        case '-':
            this.updateUI(val1 - val2);
            break;
        case '*':
            this.updateUI(val1 * val2);
            break;
        case '/':
            if (val2 == 0) return;
            this.updateUI(val1 / val2);
            break;
    }
};

Calculator.prototype.updateUI = function (total) {
    this.output.innerHTML = total;
};

var calculator = new Calculator();
calculator.init();