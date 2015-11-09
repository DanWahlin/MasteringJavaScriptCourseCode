function borderChanger(id, size) {
	return function() {
		document.getElementById(id).style.border = size + 'px solid black';
	};
}

var divId = 'container';
var size1 = borderChanger(divId, 1);
var size6 = borderChanger(divId, 6);

document.getElementById('size-1').onclick = size1;
document.getElementById('size-6').onclick = size6;