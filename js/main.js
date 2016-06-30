/**
 * Created by alis on 17.06.16.
 */
"use strict";

var data = data_js;

function buildContinuous(obj, curr_obj){
    return "<div>continuous not impl yet</div>";
}

function buildCategorical(obj, curr_obj){
    console.log("building categorical var", curr_obj);
    var elem = $("<div></div>");
    var name_div = $("<div>" + curr_obj + "</div>").css({"display":"inline"});
    elem.append(name_div);
    var combo = $("<select></select>");

    $.each(obj[curr_obj].values, function(i, el){
        //console.log(i, el);
        combo.append("<option>" + el + "</option>");

    });
    elem.append(combo);

    return elem;
}

function findChildren(obj, sub_obj, seen){
    for (var a in sub_obj) {
        if (seen.indexOf(sub_obj[a]) == -1)
            seen.push(sub_obj[a]);

        var div = "";
console.log(obj[sub_obj[a]].type);
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


        if(obj[sub_obj[a]].affects != undefined){
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

for (var i in seen) {
    console.log(seen[i]);
}


//console.log(seen, seen.length);