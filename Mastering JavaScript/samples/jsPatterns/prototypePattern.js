var Calculator = function (tb, eq) { //Constructor defines properties and inits object
    this.eqCtl = document.getElementById(eq);
    this.currNumberCtl = document.getElementById(tb);
    this.operator = null;
    this.operatorSet = false;
    this.equalsPressed = false;
    this.lastNumber = null;
};

//Prototype defines functions using JSON syntax
Calculator.prototype = {

    add: function (x, y) {
        return x + y;
    },

    subtract: function (x, y) {
        return x - y;
    },

    multiply: function (x, y) {
        return x * y;
    },

    divide: function (x, y) {
        if (y === 0) {
            alert("Can't divide by 0");
        }
        return x / y;
    },

    setVal: function (val) {
        this.currNumberCtl.innerHTML = val;
    },

    setEquation: function (val) {
        this.eqCtl.innerHTML = val;
    },

    clearNumbers: function () {
        this.lastNumber = null;
        this.equalsPressed = this.operatorSet = false;
        this.setVal('0');
        this.setEquation('');
    },

    setOperator: function (newOperator) {
        if (newOperator === '=') {
            this.equalsPressed = true;
            this.calculate();
            this.setEquation('');
            return;
        }

        //Handle case where = was pressed
        //followed by an operator (+, -, *, /)
        if (!this.equalsPressed) this.calculate();
        this.equalsPressed = false;
        this.operator = newOperator;
        this.operatorSet = true;
        this.lastNumber = parseFloat(this.currNumberCtl.innerHTML);
        var eqText = (this.eqCtl.innerHTML === '') ?
                    this.lastNumber + ' ' + this.operator + ' ' :
                    this.eqCtl.innerHTML + ' ' + this.operator + ' ';
        this.setEquation(eqText);
    },

    numberClick: function (e) {
        var button = (e.target) ? e.target : e.srcElement;
        if (this.operatorSet === true || this.currNumberCtl.innerHTML === '0') {
            this.setVal('');
            this.operatorSet = false;
        }
        this.setVal(this.currNumberCtl.innerHTML + button.innerHTML);
        this.setEquation(this.eqCtl.innerHTML + button.innerHTML);
    },

    calculate: function () {
        if (!this.operator || this.lastNumber === null) return;
        var displayedNumber = parseFloat(this.currNumberCtl.innerHTML),
                    newVal = 0;
        //eval() would've made this a whole lot simpler
        //but didn't want to use it in favor of a more
        //"robust" set of methods to demo patterns
        switch (this.operator) {
            case '+':
                newVal = this.add(this.lastNumber, displayedNumber);
                break;
            case '-':
                newVal = this.subtract(this.lastNumber, displayedNumber);
                break;
            case '*':
                newVal = this.multiply(this.lastNumber, displayedNumber);
                break;
            case '/':
                newVal = this.divide(this.lastNumber, displayedNumber);
                break;
        }
        this.setVal(newVal);
        this.lastNumber = newVal;
    }
};

var calc = new Calculator('currNumber', 'eq');