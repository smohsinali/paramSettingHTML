/**
 * Created by alis on 17.06.16.
 */
"use strict";

var data = data_js;
var seen = [];

for(var i in data){
    if(seen.indexOf(i) != -1 || data[i].dependsOn != undefined)continue;

    seen.push(i);

    if(data[i].affects != undefined) {
        for (var a in data[i].affects){
            if(seen.indexOf(data[i].affects[a]) == -1)
                seen.push(data[i].affects[a]);
        }
    }

}

console.log(seen, seen.length);