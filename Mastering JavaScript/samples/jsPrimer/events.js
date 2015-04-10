function addNumbers() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    alert(x + y);
}

var submit2 = document.getElementById('submit2');
submit2.addEventListener('click', addNumbers);
