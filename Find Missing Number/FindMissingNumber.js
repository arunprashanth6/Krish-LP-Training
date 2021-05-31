var express = require('express');
var app = express();
var fs = require("fs");

app.get('/findMissingNumber', function (req, res) {
   res.send(findMissingNumber(1, 10, [1, 3, 5, 6,7,9,10]))
 })
 
 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })

 function findMissingNumber(start, end, sequenceArray){
     var missingNumber = [];
     for(var i = start; i <= end; i++){
         if(sequenceArray.indexOf(i) == -1){
            missingNumber.push(i);
         }
     }

     return missingNumber;
 }