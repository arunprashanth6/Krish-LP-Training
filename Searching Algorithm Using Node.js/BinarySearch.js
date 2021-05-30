var express = require('express');
var app = express();
var fs = require("fs");

app.get('/binarySearch', function (req, res) {
   res.end(binarySearch(9,[2,4,7,9,33]).toString());
 })
 
 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })



function binarySearch(value, list) {
    let first = 0;    //left endpoint
    let last = list.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;
 
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (list[middle] == value) {
            found = true;
            position = middle;
        } else if (list[middle] > value) {  //if in lower half
            last = middle - 1;
        } else {  //in in upper half
            first = middle + 1;
        }
    }
    return position;
}
