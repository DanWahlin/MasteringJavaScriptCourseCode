'use strict';

var TableHelper = function (settings) {
    this.data = settings.data;
    this.columnMap = settings.columnMap;
    this.containerId = settings.containerId;
    var table = '<table>',
        endTable = '</table>';

    this.render = function () {
        if (this.data && this.data.length) {
            //Change caller to TableHelper instance

        }
    };

    var renderHeader = function (renderThead) {
        var tr = '<tr>';
        for (var prop in this.data[0]) {
            tr += '<th>' + getColumnName.call(this, prop) + '</th>';
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
    },

    //Add getColumnName() here



};

