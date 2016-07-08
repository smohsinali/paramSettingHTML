/**
 * Created by alis on 17.06.16.
 */
"use strict";

var data = data_js;

function buildContinuous(obj, curr_obj) {
    var depOn = obj[curr_obj].dependsOn != undefined ? obj[curr_obj].dependsOn[0] : null;
    //console.log("building continuous var", curr_obj, "depon", depOn);

    var elem = $("<div></div>").text(String(curr_obj));
    //var name_div = $("<div>" + curr_obj + "</div>").css({"display": "inline"});
    //elem.append(name_div);

    var ranges_div = $("<div></div>").css({"display": "inline"});
    var curr_val_div = $("<div></div>").css({"display": "inline"});
    var info_div = $("<a href='#'></a>").css({"display": "inline"});


    var min = obj[curr_obj].range[0];
    var max = obj[curr_obj].range[1];
    var defaultVal = obj[curr_obj].default;


    var slider = $('<input>').attr({
        id: curr_obj,
        type: 'range',
        min: min,
        max: max,
        step: (max - min) / 100
    }).appendTo(ranges_div);

    slider.val(defaultVal);
    slider.on("change", function () {
        curr_val_div.text(slider.val());
    });
    slider.on("input", function () {
        console.log("slider val changed");
        curr_val_div.text(slider.val());
    });
    curr_val_div.text(slider.val());

    var info_img = $('<img></img>').attr({
        src: 'info.png',
        width: '20px',
        'vertical-align': 'text-bottom'
    }).appendTo(info_div);

    info_img.on("mouseenter", function(){
        if(info[curr_obj] == undefined){
            //var span = $('<span>"No info available for this variable"</span>').appendTo(info_div);
            info_div.attr('title', "No info available for this variable");
        }
        else{
            info_div.attr('title', info[curr_obj]);
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

    var elem = $("<div></div>").text(String(curr_obj));
    //var name_div = $("<div>" + curr_obj + "</div>").css({"display": "inline"});
    //elem.append(name_div);

    var vals_div = $("<div></div>").css({"display": "inline"});
    var info_div = $("<a href='#'></a>").css({"display": "inline"});

    var combo = $("<select></select>").attr({
        id: curr_obj
    });

    $.each(obj[curr_obj].values, function (i, el) {
        //console.log(i, el);
        combo.append("<option>" + el + "</option>");

    });


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
        if(info[curr_obj] == undefined){
            //var span = $('<span>"No info available for this variable"</span>').appendTo(info_div);
            info_div.attr('title', "No info available for this variable");
        }
        else{
            info_div.attr('title', info[curr_obj]);
        }
    });

    elem.append(info_div);

    if (depOn != null) {
        disableCategorical(combo, depOn);
    }

    return elem;
}

function comboChng(obj, curr_obj, affected, value){
    for(var a in affected){
        var parent_vals = obj[affected[a]].dependsOn[0][curr_obj].values;
        var tmp = "#" + affected[a];

        if(parent_vals.indexOf(value) != -1){
            $(tmp).prop('disabled', false);
            $(tmp).parent().parent().css('color', 'black');
        }
        else{
            $(tmp).prop('disabled', true);
            $(tmp).parent().parent().css('color', 'lightgray');
        }
    }


}

function disableCategorical(combo, depOn) {
    for (var d in depOn) {
            if (depOn[d].values.indexOf($('#'+d).val()) == -1) {
                combo.prop('disabled', true);
                combo.parent().parent().css('color', 'lightgrey');
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
    var result=[];
    for (var s in seen) {
        var tmp = "#" + seen[s];
        if ($(tmp).is(':disabled') == false)
            console.log(seen[s], ":", $(tmp).val());
            result.push(seen[s], ":", $(tmp).val());
    }
    alert(result);
}