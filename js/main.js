/**
 * Created by alis on 17.06.16.
 */
"use strict";

var data = data_js;

function buildContinuous(obj, curr_obj) {
    var depOn = obj[curr_obj].dependsOn != undefined ? obj[curr_obj].dependsOn[0] : null;
    //console.log("building continuous var", curr_obj, "depon", depOn);

    var elem = $("<div class='varaible'></div>");
    var name_div = $("<div class='varName'>" + curr_obj + "</div>").css({"display": "inline-block"});
    elem.append(name_div);

    var ranges_div = $("<div class='varSelect'></div>").css({"display": "inline-block"});
    var curr_val_div = $("<div class='varVal'></div>").css({"display": "inline-block"});
    var info_div = $("<a class='varInfo' href='#'></a>").css({"display": "inline-block"});

    var min = obj[curr_obj]['log-scale'] == 'true' ? Math.log10(obj[curr_obj].range[0]) : obj[curr_obj].range[0];
    var max = obj[curr_obj]['log-scale'] == 'true' ? Math.log10(obj[curr_obj].range[1]) : obj[curr_obj].range[1];
    var defaultVal = obj[curr_obj]['log-scale'] == 'true' ? Math.log10(obj[curr_obj].default) : obj[curr_obj].default;

    var stepDiv = 100.0;
    var tf = 2;
    if (obj[curr_obj]['log-scale'] == 'true'){
        stepDiv = 1000.0;
        tf = 6;
    }
    var step = (max-min) / stepDiv;
    if (obj[curr_obj]['integer'] == 'true'){
        step = 1;
    }

    min = min.toFixed(tf);
    max = max.toFixed(tf);
    //step = step.toFixed(tf+2);
    defaultVal = defaultVal.toFixed(tf);


    //var min = obj[curr_obj].range[0];
    //var max = obj[curr_obj].range[1];
    //var defaultVal = obj[curr_obj].default;

    var slider = $('<input>').attr({
        id: curr_obj,
        type: 'range',
        min: min,
        max: max,
        step: step
    }).appendTo(ranges_div);

    slider.val(defaultVal);

    slider.on("change", function () {
        var sv = parseFloat(slider.val());
        curr_val_div.text(obj[curr_obj]['log-scale'] == 'true' ? Math.pow(10, sv).toFixed(tf) : sv.toFixed(tf));
    });

    slider.on("input", function () {
        var sv = parseFloat(slider.val());
        curr_val_div.text(obj[curr_obj]['log-scale'] == 'true' ? Math.pow(10, sv).toFixed(tf) : sv.toFixed(tf));
    });

    var sv = parseFloat(slider.val());
    curr_val_div.text(obj[curr_obj]['log-scale'] == 'true' ? Math.pow(10, sv).toFixed(tf) : sv.toFixed(tf));

    var info_img = $('<img></img>').attr({
        src: 'info.png',
        width: '20px',
        'vertical-align': 'text-bottom'
    }).appendTo(info_div);

    info_img.on("mouseenter", function(){
        if(depOn == null) {
            var text = 'This variable does not depend on any other variable.';
        }
        else{
            var text = '';
            Object.keys(depOn).forEach(function(x){text = x + ' in [' + depOn[x]["values"] +']';});
            text = 'This variable active if ' + text;

        }
        if(info[curr_obj] == undefined){
            //var span = $('<span>"No info available for this variable"</span>').appendTo(info_div);
            if(depOn == null) depOn='This variable does not depend on any other variable.';
            var title = 'No info available for this variable \n\n' + text;
            info_div.attr('title', title);
        }
        else{
            if(depOn == null) depOn='This variable does not depend on any other variable.';
            var title = info[curr_obj] + '\n\n' + text;
            info_div.attr('title', title);
        }
    });

    elem.append(ranges_div);
    elem.append(curr_val_div);
    elem.append(info_div);


    if(depOn != null){
        disableCategorical(slider, depOn);
    }

    return elem;
}

function buildCategorical(obj, curr_obj) {

    var depOn = obj[curr_obj].dependsOn != undefined ? obj[curr_obj].dependsOn[0] : null;
    var affected = obj[curr_obj].affects != undefined ? obj[curr_obj].affects : null;
    //console.log(curr_obj, "affects", affected);

    var elem = $("<div class='varaible'></div>");
    var name_div = $("<div class='varName'>" + curr_obj + "</div>").css({"display": "inline-block"});
    elem.append(name_div);

    var vals_div = $("<div class='varSelect'></div>").css({"display": "inline-block"});
    var info_div = $("<a class='varInfo' href='#'></a>").css({"display": "inline-block"});

    var combo = $("<select ></select>").attr({
        id: curr_obj
    });

    $.each(obj[curr_obj].values, function (i, el) {
        //console.log(i, el);
        combo.append("<option>" + el + "</option>");

    });

    //console.log(curr_obj, obj[curr_obj].values.length);


    var defaultVal = obj[curr_obj].default;
    combo.val(defaultVal);

    vals_div.append(combo);
    elem.append(vals_div);

    combo.on("change", function () {
        console.log("combo val changed");
        if(affected !=null){
            comboChng(obj, curr_obj, affected, combo.val())
        }
    });

    var info_img = $('<img></img>').attr({
        src: 'info.png',
        width: '20px',
        'vertical-align': 'text-bottom'
    }).appendTo(info_div);

    info_img.on("mouseenter", function(){
        if(depOn == null) {
            var text = 'This variable does not depend on any other variable.';
        }
        else{
            var text = '';
            Object.keys(depOn).forEach(function(x){text = x + ' in [' + depOn[x]["values"] +']';});
            text = 'This variable active if ' + text;

        }
        if(info[curr_obj] == undefined){
            //var span = $('<span>"No info available for this variable"</span>').appendTo(info_div);
            if(depOn == null) depOn='This variable does not depend on any other variable.';
            var title = 'No info available for this variable \n\n' + text;
            info_div.attr('title', title);
        }
        else{
            if(depOn == null) depOn='This variable does not depend on any other variable.';
            var title = info[curr_obj] + '\n\n' + text;
            info_div.attr('title', title);
        }
    });

    elem.append(info_div);

    if (depOn != null) {
        disableCategorical(combo, depOn);
    }


    if(obj[curr_obj].values.length == 1){
        //console.log(curr_obj, obj[curr_obj].values.length);
        elem.hide();
    }
    return elem;
}

function comboChng(obj, curr_obj, affected, value){


    for(var a in affected){
        var parent_vals = obj[affected[a]].dependsOn[0][curr_obj].values;
        var tmp = affected[a];



        if(parent_vals.indexOf(value) != -1){
            $(document.getElementById(tmp)).prop('disabled', false);
            $(document.getElementById(tmp)).parent().parent().css('color', 'black');
            $(document.getElementById(tmp)).parent().parent().show();
        }
        else{
            $(document.getElementById(tmp)).prop('disabled', true);
            $(document.getElementById(tmp)).parent().parent().css('color', 'lightgray');
            $(document.getElementById(tmp)).parent().parent().hide();
        }

        if('values' in obj[tmp]){
            if(obj[tmp].values.length == 1){
                console.log($(document.getElementById(tmp)).parent().parent());
                $(document.getElementById(tmp)).parent().parent().hide();
            }
        }
    }


}

function disableCategorical(combo, depOn) {
    for (var d in depOn) {
        var tmp = d;

            if (depOn[d].values.indexOf($(document.getElementById(tmp)).val()) == -1) {
                combo.prop('disabled', true);
                combo.parent().parent().css('color', 'lightgrey');
                combo.parent().parent().hide();
            }
    }
}

function findChildren(obj, sub_obj, seen) {
    for (var a in sub_obj) {
        if (seen.indexOf(sub_obj[a]) == -1)
            seen.push(sub_obj[a]);

        var div = "";

        {
            if (obj[sub_obj[a]].type == "continuous") {
                div = buildContinuous(obj, sub_obj[a]);
            }
            else if (obj[sub_obj[a]].type == "categrical") {
                div = buildCategorical(obj, sub_obj[a]);
            }
            else {
                div = "<div>Unknown Type</div>";
            }

            $(params).append(div);
        }


        if (obj[sub_obj[a]].affects != undefined) {
            findChildren(obj, obj[sub_obj[a]].affects, seen);
        }
    }

    return seen;
}

function findVars(obj) {
    var seen = [];

    for (var i in obj) {
        if (seen.indexOf(i) != -1 || obj[i].dependsOn != undefined)continue;

        seen.push(i);

        var div = "";

        {
            if (obj[i].type == "continuous") {
                div = buildContinuous(obj, i);
            }
            else if (obj[i].type == "categrical") {
                div = buildCategorical(obj, i);
            }
            else {
                div = "<div>Unknown Type</div>";
            }

            $(params).append(div);
        }

        if (obj[i].affects != undefined) {
            seen = findChildren(obj, obj[i].affects, seen);
        }
    }
    return seen;
}

var seen = findVars(data);


function generate_params() {
    //var seen = findVars(data);
    var result={};
    for (var s in seen) {
        var tmp = seen[s];
        if ($(document.getElementById(tmp)).is(':disabled') == false) {
            console.log(seen[s], ":", $(document.getElementById(tmp)).val());
            result[seen[s]] = $(document.getElementById(tmp)).val();
        }
    }
    var zip = new JSZip();
    var file = [];
    file.push(JSON.stringify(result));
    zip.file("paramVals.json", JSON.stringify(result, null, '\t'));

    zip.generateAsync({type:"blob"})
        .then(function(content) {
            // see FileSaver.js
            saveAs(content, "hp.json.zip");
        });
    //var blob = new Blob(file, {type: "text/plain;charset=utf-8"});
    //saveAs(zip, "hello.zip");
    //result = JSON.parse(result);
    //JSON.stringify(result ,'\#t');
// console.log(JSON.stringify(result, null, '\n'));
    alert(JSON.stringify(result));
}