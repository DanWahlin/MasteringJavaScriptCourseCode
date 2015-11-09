//Copyright 2014 Wahlin Consulting - All Rights Reserved
//This code may not be used in any application without expression approval of Wahlin Consulting

var editor = function () {
    var jsEditor, htmlEditor, cssEditor,
        codeFrame, samplesSelect, currentSampleCategoryMetadata, currentSampleMetadata, delay = 200, editors

    init = function () {

        var results = $('#resultsTab');
        results.click(runCode);
        samplesSelect = $('#samples');
        samplesSelect.change(loadSample);
        codeFrame = $('#codeFrame')[0];

        if (!String.prototype.trim) {
            String.prototype.trim = function () {
                return this.replace(/^\s+|\s+$/g, '');
            };
        }

        initEditors();
        loadSamples();
        loadLastViewedTitle();
    },

    initEditors = function () {
        jsEditor = ace.edit("jsEditor");
        jsEditor.getSession().setMode('ace/mode/javascript');

        htmlEditor = ace.edit("htmlEditor");
        htmlEditor.getSession().setMode('ace/mode/html');

        cssEditor = ace.edit("cssEditor");
        cssEditor.getSession().setMode('ace/mode/css');

        editors = [jsEditor, htmlEditor, cssEditor];

        for (var i = 0; i < editors.length; i++) {
            editors[i].setShowPrintMargin(false);
        }
    },

    loadSamples = function () {
        if (!metadata) {
            alert('Unable to load sample metadata file');
            return;
        }

        var options = '<option>Select a Sample</option>';
        for (var i = 0; i < metadata.length; i++) {
            options += '<optgroup label="' + metadata[i].title + '">'
            for (var j = 0; j < metadata[i].samples.length; j++) {
                options += '<option>' + metadata[i].samples[j].title + '</option>';
            }
            options += '</optgroup>';
        }
        $('#samples').html(options);

    },

    loadLastViewedTitle = function () {
        if (localStorage && localStorage.lastViewedTitle) {
            var title = localStorage.lastViewedTitle;
            samplesSelect.val(title);
            //samplesSelect.find('option[value="' + title + '"]').attr('selected', 'true');
            loadSample(null, localStorage.lastViewedTitle);
        }
    }

    runCode = function (e) {
        var js = jsEditor.getValue(),
            html = htmlEditor.getValue(),
            css = cssEditor.getValue();
        sendMessage(js, html, css);
    },

    loadSample = function (e, lastViewedTitle) {
        var title = (lastViewedTitle) ? lastViewedTitle : samplesSelect.find('option:selected').text();
        if (title != 'Select a Sample') {
            if (localStorage) localStorage.lastViewedTitle = title;
            var category = '';
            var folder;
            for (var i = 0; i < metadata.length; i++) {
                category = metadata[i].title;
                for (var j = 0; j < metadata[i].samples.length; j++) {
                    if (title === metadata[i].samples[j].title) {
                        folder = metadata[i].folder;
                        currentSampleCategoryMetadata = metadata[i];
                        currentSampleMetadata = metadata[i].samples[j];
                        break;
                    }
                }
            }

            $('#sampleTitle').html(category + ':<br />' + title);

            if (currentSampleMetadata && folder) {
                var ajaxCalls = [];
                var js, html, css, sampleFolder = (currentSampleMetadata.folder) ? currentSampleMetadata.folder : '';

                if (currentSampleMetadata.jsFile)
                    ajaxCalls.push($.ajax({
                        url: folder + '/' + sampleFolder + '/' + currentSampleMetadata.jsFile, dataType: 'text',
                        success: function (data) {
                            js = data;
                        }
                    }));

                if (currentSampleMetadata.htmlFile)
                    ajaxCalls.push($.ajax({
                        url: folder + '/' + sampleFolder + '/' + currentSampleMetadata.htmlFile,
                        success: function (data) {
                            html = data;
                        }
                    }));

                if (currentSampleMetadata.cssFile)
                    ajaxCalls.push($.ajax({
                        url: folder + '/' + sampleFolder + '/' + currentSampleMetadata.cssFile,
                        success: function (data) {
                            css = data;
                        }
                    }));

                $.when.apply($, ajaxCalls).then(function () {
                    updateEditor(js, html, css);
                });                
            }                       
        }
        else {
            updateEditor();
        }
    },

    updateEditor = function (js, html, css) {
        //code = code.trim().replace(/^ +/gm, '');
        (js) ? jsEditor.setValue(js.trim()) : jsEditor.setValue('');
        (html) ? htmlEditor.setValue(html.trim()) : htmlEditor.setValue('');
        (css) ? cssEditor.setValue(css.trim()) : cssEditor.setValue('');

        for (var i = 0; i < editors.length; i++) {
            var editor = editors[0];
            editor.blur();
            editor.gotoLine(1);
            editor.scrollPageUp();
        }

        //Reload the iframe for each sample
        //codeFrame.contentWindow.location.reload(true);
        var ticks = new Date().getTime().toString();
        codeFrame.contentWindow.location.href = codeFrame.src + '?v=' + ticks;
        $(codeFrame).load(function () {
            sendMessage('', '', '');
        });

        $('#tabs a:first').tab('show');
    },

    sendMessage = function (js, html, css) {
        var message = { "js": js, "html": html, "css": css, "meta": currentSampleMetadata, baseUrl: currentSampleCategoryMetadata.folder};
        codeFrame.contentWindow.postMessage(JSON.stringify(message), 'http://' + location.host);
    };

    return {
        init: init
    };
}();
