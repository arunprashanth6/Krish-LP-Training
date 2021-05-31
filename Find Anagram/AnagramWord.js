var express = require('express');
var app = express();
var fs = require("fs");

app.get('/anagramWord', function (req, res) {
   res.send(anagramWord("Race","Care"))
 })
 
 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })

 function anagramWord(firstWord, secondWord) {
     firstWord = firstWord.toLowerCase();
     secondWord = secondWord.toLowerCase();

     for(let i = 0; i < secondWord.length; i++){
         if(secondWord.indexOf(firstWord.charAt(i)) == -1){
             return 'Not an anagram';
         }
     }

     return 'It is an anagram';
 }
