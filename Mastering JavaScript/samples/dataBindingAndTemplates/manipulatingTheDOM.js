var items = [
    { title: 'Game', price: 59.99 },
    { title: 'Movie Ticket', price: 9.99 }
];
var total = 0, html = '<table>';
for (var i = 0, len=items.length; i < len; i++) {
    var item = items[i];
    html += '<tr><td>' + item.title + '</td>' +
            '<td>' + item.price + '</td></tr>';
    total += item.price;
}
html += '</table>';

document.getElementById('purchases').innerHTML = html;
document.getElementById('total').innerHTML = total;

