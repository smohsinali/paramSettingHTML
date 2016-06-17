/**
 * Created by alis on 17.06.16.
 */
"use strict";

var fileInput = document.getElementById('fileInput');
var fileDisplayArea = document.getElementById('fileDisplayArea');

fileInput.addEventListener('change', function(e) {
    var file = fileInput.files[0];
    var textType = /text.*/;

        var reader = new FileReader();

        reader.onload = function(e) {
            var content = reader.result;
            var lines = content.split(/\r|\n/);
            for (var i in lines){
                var line = lines[i].substring(0, lines[i].indexOf('#'));
                line = line.split(/(\{|\[)/);
                console.log(line);
            }


        }

        reader.readAsText(file);
});