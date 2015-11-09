var eqCtl,
    currNumberCtl,
    operator,
    operatorSet = false,
    equalsPressed = false,
    lastNumber = null;

currNumberCtl = document.getElementById('currNumber');
eqCtl = document.getElementById('eq');

function add(x,y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        alert("Can't divide by 0");
        return 0;
    }
    return x / y;
}
     
function setVal(val) {
    currNumberCtl.innerHTML = val;
}
        
function setEquation(val) {
    eqCtl.innerHTML = val;
}
        
function clearNumbers() {
    lastNumber = null;
    equalsPressed = operatorSet = false;
    setVal('0');
    setEquation('');
}

function setOperator(newOperator) {
    if (newOperator === '=') {
        equalsPressed = true;
        calculate();
        setEquation('');
        return;
    }
            
    //Handle case where = was pressed
    //followed by an operator (+, -, *, /)
    if (!equalsPressed) calculate();
    equalsPressed = false;
    operator = newOperator;
    operatorSet = true;
    lastNumber = parseFloat(currNumberCtl.innerHTML);
    var eqText = (eqCtl.innerHTML === '') ? 
        lastNumber + ' ' + operator + ' ' : 
        eqCtl.innerHTML + ' ' + operator + ' ';
    setEquation(eqText);
}

function numberClick(e) {
    var button = (e.target) ? e.target : e.srcElement;
    if (operatorSet === true || currNumberCtl.innerHTML === '0') {
        setVal('');
        operatorSet = false;            
    }
    setVal(currNumberCtl.innerHTML + button.innerHTML);
    setEquation(eqCtl.innerHTML + button.innerHTML);
}

function calculate() {
    if (!operator || lastNumber === null) return;
    var currNumber = parseFloat(currNumberCtl.innerHTML),
        newVal = 0;
    //eval() would've made this a whole lot simpler
    //but didn't want to use it in favor of a more
    //"robust" set of methods to demo patterns
    switch (operator) {
        case '+':
            newVal = add(lastNumber, currNumber);
            break;
        case '-':
            newVal = subtract(lastNumber, currNumber);
            break;
        case '*':
            newVal = multiply(lastNumber, currNumber);
            break;
        case '/':
            newVal = divide(lastNumber, currNumber);
            break;
    }
    setVal(newVal);
    lastNumber = newVal;
}
