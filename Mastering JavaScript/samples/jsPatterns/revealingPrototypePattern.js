//Constructor defines properties and inits object
var Calculator = function (cn, eq) {
    this.eqCtl = document.getElementById(eq);
    this.currNumberCtl = document.getElementById(cn);
    this.operator = null;
    this.operatorSet = false;
    this.equalsPressed = false;
    this.lastNumber = null;
};

Calculator.prototype = function () {
        var add = function (x, y) {
            return x + y;
        },

        subtract = function (x, y) {
            return x - y;
        },

        multiply = function (x, y) {
            return x * y;
        },

        divide = function (x, y) {
            if (y == 0) {
                alert("Can't divide by 0");
            }
            return x / y;
        },

        setVal = function (val) {
            this.currNumberCtl.innerHTML = val;
        },

        setEquation = function (val) {
            this.eqCtl.innerHTML = val;
        },

        clearNumbers = function () {
            this.lastNumber = null;
            this.equalsPressed = this.operatorSet = false;
            setVal.call(this, '0');
            setEquation.call(this, '');
        },

        setOperator = function (newOperator) {
            if (newOperator == '=') {
                this.equalsPressed = true;
                calculate.call(this);
                setEquation.call(this, '');
                return;
            }

            //Handle case where = was pressed
            //followed by an operator (+, -, *, /)
            if (!this.equalsPressed) calculate.call(this);
            this.equalsPressed = false;
            this.operator = newOperator;
            this.operatorSet = true;
            this.lastNumber = parseFloat(this.currNumberCtl.innerHTML);
            var eqText = (this.eqCtl.innerHTML == '') ?
                        this.lastNumber + ' ' + this.operator + ' ' :
                        this.eqCtl.innerHTML + ' ' + this.operator + ' ';
            setEquation.call(this, eqText);
        },

        numberClick = function (e) {
            var button = (e.target) ? e.target : e.srcElement;
            if (this.operatorSet == true || this.currNumberCtl.innerHTML == '0') {
                setVal.call(this, '');
                this.operatorSet = false;
            }
            setVal.call(this,this.currNumberCtl.innerHTML + button.innerHTML);
            setEquation.call(this, this.eqCtl.innerHTML + button.innerHTML);
        },

        calculate = function () {
            if (!this.operator || this.lastNumber == null) return;
            var displayedNumber = parseFloat(this.currNumberCtl.innerHTML),
                        newVal = 0;
            //eval() would've made this a whole lot simpler
            //but didn't want to use it in favor of a more
            //"robust" set of methods to demo patterns
            switch (this.operator) {
                case '+':
                    newVal = add(this.lastNumber, displayedNumber);
                    break;
                case '-':
                    newVal = subtract(this.lastNumber, displayedNumber);
                    break;
                case '*':
                    newVal = multiply(this.lastNumber, displayedNumber);
                    break;
                case '/':
                    newVal = divide(this.lastNumber, displayedNumber);
                    break;
            }
            setVal.call(this, newVal);
            this.lastNumber = newVal;
        };

    return {
        numberClick: numberClick,
        setOperator: setOperator,
        clearNumbers: clearNumbers
    };
}();

var calc = new Calculator('currNumber', 'eq');
var calc2 = new Calculator('currNumber2', 'eq2');