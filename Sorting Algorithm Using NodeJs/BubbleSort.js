var express = require('express');
var app = express();
var fs = require("fs");

app.get('/bubbleSort', function (req, res) {
   res.end(bubbleSort([10,15,5,9,1,99]).toString());
 })
 
 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })


function bubbleSort(arr) {
    var swapp;
    var n = arr.length-1;
    var x=arr;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x;

}




 