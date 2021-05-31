var express = require('express');
var app = express();
var fs = require("fs");

app.get('/findWordCount', function (req, res) {
   res.send(findTheWordCount("Good morning everyone"));
 })
 
 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })

function findTheWordCount(word) {
    var letters = [];
    
    word = word.replace(/\s+/g, '');
    word = word.toLowerCase();
    for(var i = 0; i < word.length; i++){
        var character = word.charAt(i);
        var index = letters.findIndex(letter => letter.letter == character);

        if(index != -1){
            letters[index].count = letters[index].count + 1;   
        }
        else {
            letters.push({
                letter: character,
                count: 1
            })
        }
    }
  
    return letters;
}

