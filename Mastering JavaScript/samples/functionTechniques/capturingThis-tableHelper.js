'use strict';

var TableHelper = function (settings) {
    this.data = settings.data;
    this.containerId = settings.containerId;
    var self = this,
        table = '<table>',
        endTable = '</table>';

    this.render = function () {
        if (self.data && self.data.length) {
            table += renderHeader(true); //Change caller to TableHelper instance
            table += renderRows(true) + endTable; //Change caller to TableHelper instance
            renderTable(); //Change caller to TableHelper instance
        }
    };

    var renderHeader = function (renderThead) {
        var tr = '<tr>';
        for (var prop in self.data[0]) {
            tr += '<th>' + prop + '</th>';
        }
        tr += '</tr>';
        if (renderThead) tr = '<thead>' + tr + '</thead>';
        return tr;
    },

    renderRows = function (renderTbody) {
        var rows = '';
        for (var i = 0, len = self.data.length; i < len; i++) {
            rows += '<tr>';
            var row = self.data[i];
            for (var prop in row) {
                rows += '<td>' + row[prop] + '</td>';
            }
            rows += '</tr>';
        }
        if (renderTbody) rows = '<tbody>' + rows + '</tbody>';
        return rows;
    },

    renderTable = function () {
        var container = document.getElementById(self.containerId);
        if (container) {
            table += '<div class="rowCount">' + self.data.length + ' rows</div>';
            container.innerHTML = table;
        }
    };
};