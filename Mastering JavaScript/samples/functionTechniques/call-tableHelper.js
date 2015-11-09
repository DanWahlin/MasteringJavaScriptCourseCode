'use strict';

var TableHelper = function (settings) {
    this.data = settings.data;
    this.containerId = settings.containerId;
    var table = '<table>',
        endTable = '</table>';

    this.render = function () {
        if (this.data && this.data.length) {
            //Change caller to TableHelper instance
            table += renderHeader.call(this, true);
            table += renderRows.call(this, true) + endTable; 
            renderTable.call(this); 
        }
    };

    var renderHeader = function (renderThead) {
        var tr = '<tr>';
        for (var prop in this.data[0]) {
            tr += '<th>' + prop + '</th>';
        }
        tr += '</tr>';
        if (renderThead) tr = '<thead>' + tr + '</thead>';
        return tr;
    },

    renderRows = function (renderTbody) {
        var rows = '';
        for (var i = 0, len = this.data.length; i < len; i++) {
            rows += '<tr>';
            var row = this.data[i];
            for (var prop in row) {
                rows += '<td>' + row[prop] + '</td>';
            }
            rows += '</tr>';
        }
        if (renderTbody) rows = '<tbody>' + rows + '</tbody>';
        return rows;
    },

    renderTable = function () {
        var container = document.getElementById(this.containerId);
        if (container) {
            table += '<div class="rowCount">' + this.data.length + ' rows</div>';
            container.innerHTML = table;
        }
    };
};

var data = [
    { firstName: 'Jane', lastName: 'Doe', city: 'Phoenix' },
    { firstName: 'John', lastName: 'Doe', city: 'Phoenix' },
    { firstName: 'Michelle', lastName: 'Thompson', city: 'Seattle' },
    { firstName: 'Jose', lastName: 'Rodriguez', city: 'California' },
    { firstName: 'Tina', lastName: 'Smith', city: 'New York City' }
];
var table = new TableHelper({
    data: data,
    containerId: 'tableContainer'
});
table.render();

/* 
    Alternate way to use it:
    var table = new TableHelper();
    table.data = data;
    table.containerId = 'tableContainer';
    table.render();
*/