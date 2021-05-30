var express = require('express');
var app = express();
var fs = require("fs");

app.get('/mergeSort', function (req, res) {
   res.end(mergeSort([11,8,14,3,6,2,7]).toString());
 })
 
 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })

 function mergeSort(arr){
    var len = arr.length;
    if(len <2)
       return arr;
    var mid = Math.floor(len/2),
        left = arr.slice(0,mid),
        right =arr.slice(mid);
    //send left and right to the mergeSort to broke it down into pieces
    //then merge those
    return merge(mergeSort(left),mergeSort(right));
 }
 function merge(left, right){
   var result = [],
       lLen = left.length,
       rLen = right.length,
       l = 0,
       r = 0;
   while(l < lLen && r < rLen){
      if(left[l] < right[r]){
        result.push(left[l++]);
      }
      else{
        result.push(right[r++]);
     }
   }  
   //remaining part needs to be addred to the result
   return result.concat(left.slice(l)).concat(right.slice(r));
 }
 