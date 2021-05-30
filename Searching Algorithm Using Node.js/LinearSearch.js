var express = require('express');
var app = express();
var fs = require("fs");

app.get('/linearSearch', function (req, res) {
   res.end(linearSearch([11,8,14,3,6,2,7],2).toString());
 })
 
 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })

 function linearSearch(arr, key){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            return i
        }
    }
    return -1
}
