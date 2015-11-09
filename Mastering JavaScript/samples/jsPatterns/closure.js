//standard function - not a closure
function myNonClosure() {
    //variable will not be stored in a closure between calls
    //to the myNonClosure function
    var date = new Date();
    return date.getMilliseconds();
}

//closure example 
function myClosure() {
    //date will be stored in the closure
    //due to the function referencing it
    var date = new Date();

    return function () {
        var otherDate = new Date();
        return "Closure variable value for milliseconds: <span class='blue'>" +
                date.getMilliseconds() +
                "</span><br>Non closure variable value for milliseconds: <span class='red'>" +
                otherDate.getMilliseconds() +
                "</span>";
    };
}

var myClosure2 = function () {
    var date = new Date(),
        myNestedFunc = function () {
            return "Closure for myNestedFunc: " + date.getMilliseconds();
        };
    return {
        myNestedFunc: myNestedFunc
    };
}();

//Using a closure
var output = document.getElementById('Output'),
    closure = myClosure();
output.innerHTML = closure();
output.innerHTML += '<br><br>' + myClosure2.myNestedFunc();
setTimeout(function () {
    output.innerHTML += '<br><br>' + closure();
    output.innerHTML += '<br><br>' + myClosure2.myNestedFunc();
}, 1500);