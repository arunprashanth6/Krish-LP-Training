var express = require('express');
var app = express();
var fs = require("fs");

app.get('/findThirdLargest', function (req, res) {
   res.end(findThirdLargest([7,5,2,4,3,9]).toString());
 })
 
 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })

 function findThirdLargest(arr){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
         }
      }
    }
    let list = arr;
console.log("Example app listening at http://%s:%s", host, port)
     if (list.length >= 3){
         return list[2];
     } else {
         return -1
        
     }
 }
