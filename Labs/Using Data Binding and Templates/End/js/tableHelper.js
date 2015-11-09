'use strict';

var TableHelper = function (settings) {
    this.data = settings.data;
    this.containerId = settings.containerId;
    this.templateId = settings.templateId;

    this.render = function () {
        if (this.data) {
            //Handlebars code goes here
            var source = document.getElementById(this.templateId).innerHTML;
            var template = Handlebars.compile(source);
            document.getElementById(this.containerId).innerHTML = template(this.data);
        }
    };
   
};

